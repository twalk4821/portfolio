import React, { useRef } from 'react';
import Paper from 'material-ui/Paper';
import photo from '../assets/tyler.jpg';
import './Portrait.css';

const style = {
  backgroundImage: `url(${photo})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const Portrait = () => {
  const paperRef = useRef(null);

  return (
    <div className='frame'>
      <Paper className="portrait" ref={paperRef} style={style} zDepth={3} circle={true} />
    </div>
  );
};

export default Portrait;