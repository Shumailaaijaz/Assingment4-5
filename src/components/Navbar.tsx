import React from 'react'
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-medium'>SA Student of GIAIC</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menueLink'><a href="#hero">Home</a></li>
                <li className='menueLink'><a href="#about">About</a></li>
                <li className='menueLink'><a href="#projects">Projects</a></li>
                <li className='menueLink'><a href="#contact">Contact</a></li>
            </ul>
            <IoMdMenu className='md:hidden' size={30} />
        </div>
    </div>
  )
}

export default Navbar
