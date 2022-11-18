import React from 'react'
import ContactContent from '../components/ContactContent';
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT ME" text="Feel free to get in touch below" />
      <ContactContent/>
    </div>
  );
}

export default Contact