import React from 'react'
import AboutContent from '../components/AboutContent';
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Skills from '../components/Skills';



const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About Me" text="Get to know me" />
      <AboutContent/>
      <Skills/>
    </div>
  );
}

export default About