import React, { Component } from 'react';

import down from '../assets/down.png';
import './DownArrow.css';

class DownArrow extends Component {
  state = {
    visible: true,
    scrolled: false,
  };

  componentDidMount() {
    this.scroll = window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window;
    const { visible } = this.state;
    if (scrollY === 0 && !visible) this.setState({ visible: true });
    if (scrollY > 0 && visible) this.setState({ visible: false, scrolled: true });
  }

  navigate = () => {
    window.scroll({
      top: document.querySelector('.projectsHeader').offsetTop-100,
      behavior: 'smooth', 
    })
    this.setState({ visible: false });
  }

  render() {
    const { visible, scrolled } = this.state;

    let classes = 'down' + (!visible ? ' hidden' : '');
    classes += (scrolled ? ' scrolled' : ' noscroll');

    return (
    <div className={classes}>
      <button onClick={this.navigate}>
        <img src={down} alt="down"/>
      </button>
    </div>
    );
  }
};

export default DownArrow;