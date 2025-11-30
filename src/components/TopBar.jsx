import React, { useState, useEffect } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import logo from '../assets/logo-white.png';

import './TopBar.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const title = "Tyler Walker Projects";

const styles = {
  titleStyle: {
    cursor: "pointer",
    backgroundImage: logo,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "75px",
    height: "50px",
  },
  appBarStyle: {
    position: 'fixed',
    textAlign: 'left',
  },
  containerStyle: {
    marginTop: '50px',
  },
};




const scrollUp = () => {
  window.scrollTo(0,0);
}

const TopBar = ({ onBack }) => {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setScrollY(scrollY);
    };

    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = (item) => {
    if (item === "Projects") {
      window.scrollTo(0, document.querySelector('.projectsHeader').offsetTop-100);
      setOpen(false);
    } else if (item === "Blog") {
      window.scrollTo(0, document.querySelector('.blogHeader').offsetTop-100);
      setOpen(false);
    } else if (item === "Contact") {
      window.scrollTo(0, document.querySelector('.contactHeader').offsetTop-100);
      setOpen(false);
    } else if (item === "About") {
      window.scrollTo(0, document.querySelector('.aboutHeader').offsetTop-100);
      setOpen(false);
    }
  };

  const classes = "top-bar" + (scrollY > 0 ? " transparent" : "");

  return (
    <div>
      <AppBar
        title="                "
        titleStyle={styles.titleStyle}
        className={classes}
        style={styles.appBarStyle}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonClick={onBack || handleToggle}
        onTitleClick={scrollUp}
      />
      <img className="logo" src={logo} />
      <Drawer containerStyle={styles.containerStyle} className="drawer" docked={false} open={open} onRequestChange={(open) => setOpen(open)}>
        <MenuItem onClick={() => handleClick("Projects")}>Projects</MenuItem>
        <MenuItem onClick={() => handleClick("Blog")}>Blog</MenuItem>
        <MenuItem onClick={() => handleClick("About")}>About me</MenuItem>
        <MenuItem onClick={() => handleClick("Contact")}>Contact</MenuItem>          
        {isOnline ? (
          <iframe style={{ "borderRadius": 12 }} src="https://open.spotify.com/embed/playlist/1PcqBhKoO26mYuLIzSuvKv?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        ) : (
          <div style={{ 
            borderRadius: 12, 
            width: "100%", 
            height: 352, 
            backgroundColor: "#1DB954", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            marginTop: "10px",
            padding: "20px",
            boxSizing: "border-box"
          }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎵</div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", textAlign: "center" }}>Spotify Player</div>
            <div style={{ fontSize: "14px", textAlign: "center", opacity: 0.9 }}>This feature requires an internet connection</div>
          </div>
        )}
      </Drawer> 
    </div>
  );
}

export default TopBar;