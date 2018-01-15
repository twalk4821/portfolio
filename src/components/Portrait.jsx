import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import photo from '../assets/tyler.jpg';
import './Portrait.css';

const style = {
  backgroundImage: `url(${photo})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

class Portrait extends Component {
  render() {
    return (
      <div className='frame'>
        <Paper className="portrait" ref={paper => this.paper = paper} style={style} zDepth={3} circle={true} />
      </div>
    );
  }
};

export default Portrait;