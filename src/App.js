import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Portrait from './components/Portrait';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Game from './components/Game.jsx';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DownArrow from './components/DownArrow';
import Scroller from './components/Scroller';
import OfflineIndicator from './components/OfflineIndicator';

import './App.css';
import { initGA, logPageView } from './analytics/index.js';

const App = () => {
  const [isShowScroller, setShowScroller] = useState(true);

  const showScroller = () => {
    setShowScroller(true);
  }

  const hideScroller = () => {
    setShowScroller(false);
  }

  useEffect(() => {
    initGA();
    logPageView("home");
  }, []);

  return (
    <div className="App">
      <OfflineIndicator />
      <Scroller showScroller={isShowScroller}/>
      <div className="content">
        <TopBar />
        <Portrait />
        <Welcome />
        <DownArrow />
        <Projects />
        <Blog />
        <About />
        <Contact showScroller={showScroller} hideScroller={hideScroller}/>
        <Game />
      </div>
      <Footer />
    </div>
  );
}

export default App;
