/**
 * Service Worker for offline image caching
 * Uses IndexedDB to store image blobs for offline access
 */

const DB_NAME = 'PortfolioImageCache';
const DB_VERSION = 1;
const STORE_NAME = 'images';
const CACHE_VERSION = 'v1';
const STATIC_CACHE = `portfolio-static-${CACHE_VERSION}`;

// IndexedDB helper functions for service worker context
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(new Error(`Failed to open database: ${request.error}`));
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const objectStore = db.createObjectStore(STORE_NAME, { keyPath: 'url' });
        objectStore.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
}

async function storeImage(url, blob) {
  try {
    const db = await openDB();
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const imageData = {
      url: url,
      blob: blob,
      timestamp: Date.now(),
      size: blob.size,
    };

    return new Promise((resolve, reject) => {
      const request = store.put(imageData);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(new Error(`Failed to store image: ${request.error}`));
    });
  } catch (error) {
    console.error('[SW] Error storing image:', error);
    throw error;
  }
}

async function getImage(url) {
  try {
    const db = await openDB();
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.get(url);
      request.onsuccess = () => {
        const result = request.result;
        resolve(result && result.blob ? result.blob : null);
      };
      request.onerror = () => reject(new Error(`Failed to get image: ${request.error}`));
    });
  } catch (error) {
    console.error('[SW] Error retrieving image:', error);
    return null;
  }
}

// Check if request is for an image
function isImageRequest(url) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico'];
  const urlLower = url.toLowerCase();
  return imageExtensions.some(ext => urlLower.includes(ext)) ||
         /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(url) ||
         /\/static\/media\//.test(url);
}

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  // Don't wait for install to complete, activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            // Delete old caches that don't match current version
            return cacheName.startsWith('portfolio-') && cacheName !== STATIC_CACHE;
          })
          .map((cacheName) => {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      // Take control of all pages immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - intercept requests and serve from cache or IndexedDB
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle image requests with IndexedDB cache-first strategy
  if (isImageRequest(request.url)) {
    event.respondWith(handleImageRequest(request));
    return;
  }

  // Handle other static assets (JS, CSS, HTML) with Cache API
  if (request.destination === 'script' || 
      request.destination === 'style' || 
      request.destination === 'document') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // Clone the response
          const responseToCache = response.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        }).catch(() => {
          // Network error - return a fallback if available
          return new Response('Offline', { status: 503 });
        });
      })
    );
  }
});

/**
 * Handle image requests with cache-first strategy using IndexedDB
 * Strategy: Check IndexedDB -> Network -> Store in IndexedDB -> Return
 */
async function handleImageRequest(request) {
  const url = request.url;

  try {
    // Step 1: Check IndexedDB cache
    const cachedBlob = await getImage(url);
    if (cachedBlob) {
      console.log('[SW] Serving image from IndexedDB cache:', url);
      return new Response(cachedBlob, {
        headers: {
          'Content-Type': getContentTypeFromUrl(url),
          'Cache-Control': 'max-age=31536000',
        },
      });
    }

    // Step 2: Not in cache, fetch from network
    try {
      const networkResponse = await fetch(request);
      
      if (!networkResponse || networkResponse.status !== 200) {
        return networkResponse;
      }

      // Step 3: Clone response and store in IndexedDB
      const blob = await networkResponse.clone().blob();
      
      // Store in IndexedDB for future offline access
      try {
        await storeImage(url, blob);
        console.log('[SW] Stored image in IndexedDB:', url);
      } catch (storeError) {
        // Log but don't fail if storage fails (e.g., quota exceeded)
        console.warn('[SW] Failed to store image in IndexedDB:', storeError);
      }

      // Step 4: Return the response
      return new Response(blob, {
        headers: {
          'Content-Type': networkResponse.headers.get('Content-Type') || getContentTypeFromUrl(url),
          'Cache-Control': 'max-age=31536000',
        },
      });
    } catch (networkError) {
      // Network failed - return error response
      console.error('[SW] Network fetch failed for image:', url, networkError);
      return new Response('Image not available offline', {
        status: 503,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  } catch (error) {
    console.error('[SW] Error handling image request:', url, error);
    // Return error response
    return new Response('Error loading image', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

/**
 * Get content type from URL extension
 */
function getContentTypeFromUrl(url) {
  const urlLower = url.toLowerCase();
  if (urlLower.includes('.jpg') || urlLower.includes('.jpeg')) {
    return 'image/jpeg';
  }
  if (urlLower.includes('.png')) {
    return 'image/png';
  }
  if (urlLower.includes('.gif')) {
    return 'image/gif';
  }
  if (urlLower.includes('.webp')) {
    return 'image/webp';
  }
  if (urlLower.includes('.svg')) {
    return 'image/svg+xml';
  }
  if (urlLower.includes('.bmp')) {
    return 'image/bmp';
  }
  return 'image/jpeg'; // Default fallback
}

// Handle messages from client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_IMAGES') {
    const imageUrls = event.data.urls || [];
    
    precacheImages(imageUrls)
      .then((result) => {
        // Send completion message back to all clients
        return self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: 'CACHE_COMPLETE',
              result: result,
            });
          });
        });
      })
      .catch((error) => {
        // Send error message back to all clients
        return self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: 'CACHE_ERROR',
              error: error.message,
            });
          });
        });
      });
  }
});

/**
 * Pre-cache multiple images
 */
async function precacheImages(urls) {
  console.log('[SW] Pre-caching images:', urls.length);
  
  let cached = 0;
  let failed = 0;
  
  for (const url of urls) {
    try {
      // Check if already cached
      const cachedBlob = await getImage(url);
      if (cachedBlob) {
        console.log('[SW] Image already cached:', url);
        cached++;
        continue;
      }

      // Fetch and cache
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        await storeImage(url, blob);
        console.log('[SW] Pre-cached image:', url);
        cached++;
      } else {
        failed++;
      }
    } catch (error) {
      console.warn('[SW] Failed to pre-cache image:', url, error);
      failed++;
    }
  }
  
  console.log('[SW] Pre-caching complete:', { total: urls.length, cached, failed });
  return { total: urls.length, cached, failed };
}

