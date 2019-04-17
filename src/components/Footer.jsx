import React from 'react';
import './Footer.css';

const up = () => {
  window.scroll({
    top: 0,
    behavior:'smooth',
  });
};

const Footer = () => (
  <div className="footer">
    <div className="links">
      <a className="in" href="https://github.com/twalk4821">LinkedIn</a>
      <a className="github" href="https://linkedin.com/in/tylerjohnwalker">Github</a>
    </div>
    <div className="middle">
      Copyright &#169; Tyler Walker &#8226; Mobile Developer based in Berkeley, CA 
    </div>
    <div className="bottom">
      <div className="up" onClick={up}>
      </div>
    </div>
  </div>
);

export default Footer;