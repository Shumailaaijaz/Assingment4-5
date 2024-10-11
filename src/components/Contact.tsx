/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";


const Contact =() => {
    return(
        <div id="Contact" className='pt-32 container'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-8'>
                  <h2 className='text-9 font-bold' data-aos="zoom-in-up"> Get in touch</h2>
                    <p className='text-gray-600 text-[20px] pt-2' data-aos="zoom-in-up">
                    Feel free to reach out if you'd like to discuss projects, opportunities, or just to chat about tech and development. I'm always open to connecting with like-minded individuals or anyone curious about my journey from homeopathy to IT. Looking forward to hearing from you!
                    </p>
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <CiMail size={30}/> shumailaaijaz359@gmail.com
                    </div>
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up"> 
                    <BsTelephone size={30}/> (03333111567)
                    </div>
                </div>
                <div className='space-y-9' >
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        className='h-[40px] bg-transparent border border-slate-600'
                        id='name'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                        className='h-[40px] bg-transparent border border-slate-600'
                        id='email'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="msg">Message</label>
                        <textarea
                        className='bg-transparent border border-slate-600'
                        id='msg' rows={9}>
                        </textarea>
                    </div>
                    <button className='bg-slate-600 p-2 px-6' >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact