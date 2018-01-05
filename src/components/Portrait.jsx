import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import photo from '../assets/ty.JPG';
import { animatePortrait } from '../classes/spiral.js';

const style = {
  position: 'absolute',
  top: -300,
  left: -300,
  height: 300,
  width: 300,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
  backgroundImage: `url(${photo})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

class Portrait extends Component {
  componentDidMount() {
    const portrait = document.querySelector('.portrait');
    animatePortrait(portrait);
  }
  render() {
    return (
      <Paper className="portrait" ref={paper => this.paper = paper} style={style} zDepth={3} circle={true} />
    );
  }
};

export default Portrait;