import './AboutContent.css'
import Aos from "aos";
import "aos/dist/aos.css";

import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import profilepic from '../assets/profile.jpg'

const AboutContent = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <div className="left" data-aos="fade-right">
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
          As an Angular and React.js front-end developer, I thrive on
          translating creative visions into captivating user interfaces. My
          expertise extends to ensuring not just aesthetic appeal, but also
          optimal functionality and responsiveness. Leveraging the power of
          these frameworks, I am dedicated to delivering seamless user
          experiences across various platforms.
        </p>
        <div className="about-button">
          <Link to="/contact">
            <button className="btn">Contact Me</button>
          </Link>
          <a href="EGU CHINEDU CV.pdf" download="Chinedu EGU CHINEDU CV.pdf">
            <button className="btn">
              Download CV <i class="bx bx-file-blank"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="right" data-aos="fade-left">
        <img src={profilepic} alt="Profile" />
      </div>
    </div>
  );
}

export default AboutContent