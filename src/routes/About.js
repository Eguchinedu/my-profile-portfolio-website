import React from 'react'
import AboutContent from '../components/AboutContent';
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";



const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About Me" text="Get to know me" />
      <AboutContent/>
    </div>
  );
}

export default About