import React, { useState, useEffect, useRef } from 'react';

import down from '../assets/down.png';
import './DownArrow.css';

const DownArrow = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const visibleRef = useRef(visible);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY === 0 && !visibleRef.current) setVisible(true);
      if (scrollY > 0 && visibleRef.current) {
        setVisible(false);
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = () => {
    window.scroll({
      top: document.querySelector('.projectsHeader').offsetTop - 75,
      behavior: 'smooth', 
    });
    setVisible(false);
  };

  let classes = 'down' + (!visible ? ' hidden' : '');
  classes += (scrolled ? ' scrolled' : ' noscroll');

  return (
    <div className={classes}>
      <button onClick={navigate}>
        <img src={down} alt="down"/>
      </button>
    </div>
  );
};

export default DownArrow;