import React from 'react'
import Heading from './Heading'

const About = () => {
  return (
    <div id='about' className='container pt-32'>
      <Heading title={'About'} />
        <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">About Me</h2>
        <p className='text-gray-500 pt-4' data-aos="zoom-in-up">"I am an IT student currently focused on learning Next.js. Previously, I worked professionally as a homeopath, but I decided to change fields to pursue my passion for technology and development. I'm excited to bring the same dedication and problem-solving skills from my previous career into the world of software development."

</p>
    </div>
  )
}

export default About
