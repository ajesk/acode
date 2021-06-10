import React from 'react';
import githubIcon from '../../resources/GitHub-Mark-Light-120px-plus.png'
import linkedin from '../../resources/linkedin.png'
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <a href="https://github.com/ajesk">
          <img alt="github-link" src={githubIcon} />
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://www.linkedin.com/in/aaronjeskie/">
          <img alt="linkedin-link" src={linkedin} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
