import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Below are some of my works/projects"/>
      <Work/>
    </div>
  )
}

export default Project