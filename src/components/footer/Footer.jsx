import React from 'react';
import './footer.css';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Hai Shive Jr.</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="www.linkedin.com">BsLinkedin</a>
        <a href="www.github.com">FaGithub</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hai Shive Jr. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;