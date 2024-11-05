import React from 'react'
import "./globals.css"

const About1 = () => {
  return (
    <>
      <div className='my-3'>
        <div className="w-full md:h-20 h-32 text-white flex flex-col items-center justify-center bg-gradient-to-r from-purple-950 via-purple-800 to-purple-500">
          <p className="text-3xl mt-4 font-extrabold">About Us</p>
          <p className='text-xs py-2 px-28'>Following a very successful adaption of Cs50x course in Nepal, we are back with Cs50 AI.</p>
        </div>
        <div className="absolute left-0 w-full overflow-hidden ">
            <svg data-name="Layer 1" className="relative block h-20 w-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b0764" /> 
                        <stop offset="50%" stopColor="#6b21a8" /> 
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="url(#purple-gradient)"></path>
            </svg>
        </div>
      </div>
    </>
  )
}

export default About1
