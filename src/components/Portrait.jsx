import React from 'react';
import Paper from 'material-ui/Paper';
import photo from '../assets/ty.JPG';

const style = {
  height: 300,
  width: 300,
  margin: 40,
  marginTop: 100,
  textAlign: 'center',
  display: 'inline-block',
  backgroundImage: `url(${photo})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const Portrait = () => (
  <Paper style={style} zDepth={3} circle={true} />
);

export default Portrait;