import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%"}}>
        <Navbar/>

        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[50px] sm:text-[70px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <p data-aos="zoom-in-up">i'm</p>
              <p data-aos="zoom-in-up">Shumaila Aijaz</p>
              <p data-aos="zoom-in-up">Frontend Developer</p>
            </div>
          </div>
        </div>
    {/* Marquee container */}
    <div className="marquee-container bg-black text-white py-2">
        <div className="marquee">
          <p>I want to become a Certified Cloud Native Applied Generative AI Engineer.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
