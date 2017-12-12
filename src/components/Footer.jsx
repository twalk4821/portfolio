import React from 'react';
import './Footer.css';

const up = () => {
  window.scrollTo(0,0);
};

const Footer = () => (
  <div className="footer">
    <div className="links">
      <a className="in" href="https://github.com/twalk4821"></a>
      <a className="github" href="https://linkedin.com/in/tylerjohnwalker"></a>
    </div>
    <div className="middle">
      Copyright &#169; Tyler Walker &#8226; Fullstack Web Developer based in Berkeley, CA 
    </div>
    <div className="bottom">
      <div className="up" onClick={up}>
      </div>
    </div>
  </div>
);

export default Footer;