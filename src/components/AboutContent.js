import './AboutContent.css'

import React from 'react'
import { Link } from 'react-router-dom'
import profilepic from '../assets/profile.jpg'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div>
          {/* eslint-disable-next-line */}
          <a href="https://github.com/Eguchinedu" target="_blank">
            <i class="bx bxl-github bx-tada-hover" id="icons"></i>
          </a>
          {/* eslint-disable-next-line */}
          <a
            href="https://www.linkedin.com/in/egu-chinedu-282746193/"
            target="_blank"
          >
            <i class="bx bxl-linkedin bx-tada-hover" id="icons"></i>
          </a>
          {/* eslint-disable-next-line */}
          <a href="https://www.instagram.com/zeus_egu/" target="_blank">
            <i class="bx bxl-instagram-alt bx-tada-hover" id="icons"></i>
          </a>
          {/* eslint-disable-next-line */}
          <a href="https://twitter.com/chinedu_egu" target="_blank">
            <i class="bx bxl-twitter bx-tada-hover" id="icons"></i>
          </a>
        </div>
        <h1>Who am i?</h1>
        <p>
          I'm a React.js Frontend developer.I love to create beautiful and
          responsive working websites/applications.
        </p>
        <div className="about-button">
          <Link to="/contact">
            <button className="btn">Contact Me</button>
          </Link>
          <a href="CHINEDU CV.pdf" download="Chinedu CHINEDU CV.pdf">
            <button className="btn">
              Download CV <i class="bx bx-file-blank"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="right">
        <img src={profilepic} alt="Profile" />
      </div>
    </div>
  );
}

export default AboutContent