import React from 'react';

import './Welcome.css';

const welcomeText = "Welcome! My name is Tyler.";

const Welcome = () => (
  <h1 className='welcome'>{welcomeText}</h1>
);

export default Welcome;