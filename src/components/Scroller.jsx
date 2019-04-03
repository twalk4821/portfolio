import React, { Component } from 'react';
import upArrow from '../assets/scrollUp.png';
import downArrow from '../assets/down.png';

import './Scroller.css';

class Scroller extends Component {
  state = {
    scrollY: 0,
  };

  componentDidMount() {
    window.onscroll = this.handleScroll;
  }

  handleScroll = () => {
    const { scrollY } = window;
    this.setState({ scrollY });
  }

  getPageSegment = () => {
    const { scrollY } = this.state;
    const headerPositions = {
      projects: document.querySelector('.projectsHeader').offsetTop - 100,
      about: document.querySelector('.aboutHeader').offsetTop - 200,
      contact: document.querySelector('.contactHeader').offsetTop - 200,
    };
    if (scrollY > headerPositions.projects && 
        scrollY < headerPositions.about - 25) {
          return {
            up: "0",
            down: headerPositions.about + 50,
          };
         } else if (scrollY > headerPositions.about && 
      scrollY < headerPositions.contact- 25) {
        return {
          up: headerPositions.projects + 50,
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
  }

  navigateTo = (position) => {
    window.scroll({
      top: position,
      behavior: 'smooth',
    });
  }

  render() {
    const { showScroller } = this.props;
    if (!showScroller) return null;
    if (!document.querySelector('.projectsHeader')) return null;

    const pageSegment = this.getPageSegment();
    if (!pageSegment) return null;

    const { up, down } = pageSegment;
    return (
      <div className="scroller">
        {up &&
          <button className="scroll-up" onClick={() => this.navigateTo(up)}>
            <img src={upArrow} alt="up"/>
          </button>
        }
        {down &&
          <button className="scroll-down" onClick={() => this.navigateTo(down)}>
            <img src={downArrow} alt="down"/>
          </button>
        }
      </div>
    );
  }
}

export default Scroller;