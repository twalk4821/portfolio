import React, { useState, useRef } from 'react';
import Paper from 'material-ui/Paper';
import photo from '../assets/tyler.jpg';
import './Portrait.css';

const style = {
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const Portrait = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const paperRef = useRef(null);
  const onLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className='frame'>
      <Paper className={isLoaded ? 'portrait' : 'opaque'} onLoad={onLoad} style={style} zDepth={3} circle={true} >
        <img src={photo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 200  }} />
      </Paper>
      <Paper className="portrait" ref={paperRef} style={style} zDepth={3} circle={true} />
    </div>
  );
};

export default Portrait;