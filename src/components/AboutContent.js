import './AboutContent.css'

import React from 'react'
import { Link } from 'react-router-dom'
import profilepic from '../assets/profile.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>
                who am i
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum nemo, earum mollitia labore dolorem perspiciatis consequuntur facilis corrupti! Nihil, at.
            </p>
            <div className="about-button">
            <Link to="/contact">
                <button className='btn'>Contact Me</button>
            </Link>
            <a href="CHINEDU CV.pdf" download="Chinedu CHINEDU CV.pdf">
              <button className="btn">Download CV</button>
            </a>
            </div>
        </div>
        <div className="right">
            <img src={profilepic} alt="Profile" />
        </div>
    </div>
  )
}

export default AboutContent