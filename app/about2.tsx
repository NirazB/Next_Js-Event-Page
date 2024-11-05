import React from 'react'
import Image from 'next/image'

const About2 = () => {
  return (
    <>
    <div className="w-full h-20 mt-28 mb-48 flex flex-row tracking-wide">
        <div className="lg:ml-40 md:ml-20 sm:mx-10 mx-10 w-2/3">
            <p className="text-2xl mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">What is CS50 AI?</p>
            <p className="pt-3 text-xs lg:pr-3 text-balance">CS50 AI is a specialized adaption of Harvard University's Cs50 Introduction to Artificial Intelligence with Python course, designed to introduce students to the fundamentals of artificial intelligence. THis couse covers core AI concepts such as machine learning, neural networks,natural language processing, and search algorithms. Through hands-on projects and real-world examples,student learn how to build intelligent systems capable of solving complex problems. Cs50 AI is ideal for those looking to gain fundamental knowledge in AI, equipping them with the skills needed ti pursue furthur studies or careers in this transformative field.</p>
        </div>
        <div className="w-1/3 lg:mr-5 md:mr-1 md:mt-8 hidden md:block mt-4">
          <Image
            className="lg:w-2/3 lg:h-60 w-2/3 md:h-40"
            src="/CS50Duck.png"
            alt="duck"
            width={1000}
            height={1000}
            priority
          />
        </div>
    </div>
    </>
  )

}

export default About2
