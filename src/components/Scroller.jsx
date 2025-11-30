import React, { useState, useEffect } from 'react';
import upArrow from '../assets/scrollUp.png';
import downArrow from '../assets/down.png';

import './Scroller.css';

const Scroller = ({ showScroller }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getPageSegment = () => {
    const headerPositions = {
      projects: document.querySelector('.projectsHeader').offsetTop - 100,
      about: document.querySelector('.aboutHeader').offsetTop - 200,
      contact: document.querySelector('.contactHeader').offsetTop - 200,
      blog: document.querySelector('.blogHeader').offsetTop - 100
    };
    if (scrollY > headerPositions.projects && 
      scrollY < headerPositions.blog - 25) {
      return {
        up: "0",
        down: headerPositions.blog + 25,
      };
    } else if (scrollY > headerPositions.blog && 
      scrollY < headerPositions.about- 25) {
        return {
          up: headerPositions.projects + 50,
          down: headerPositions.about + 125,
        };
    } else if (scrollY > headerPositions.about && 
    scrollY < headerPositions.contact- 25) {
      return {
        up: headerPositions.blog + 50,
        down: headerPositions.contact + 125,
      };
    } else if (scrollY > headerPositions.contact && 
      scrollY < headerPositions.contact + 300) {
        return {
          up: headerPositions.about + 100,
          down: document.body.scrollHeight,
        };
    } else {
      return false;
    }
  };

  const navigateTo = (position) => {
    window.scroll({
      top: position,
      behavior: 'smooth',
    });
  };

  if (!showScroller) return null;
  if (!document.querySelector('.projectsHeader')) return null;

  const pageSegment = getPageSegment();
  if (!pageSegment) return null;

  const { up, down } = pageSegment;
  return (
    <div className="scroller">
      {up &&
        <button className="scroll-up" onClick={() => navigateTo(up)}>
          <img src={upArrow} alt="up"/>
        </button>
      }
      {down &&
        <button className="scroll-down" onClick={() => navigateTo(down)}>
          <img src={downArrow} alt="down"/>
        </button>
      }
    </div>
  );
}

export default Scroller;