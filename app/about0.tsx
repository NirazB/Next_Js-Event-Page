import React from 'react'
import Image from 'next/image'

const About0 = () => {
  return (
    <>
        <div className="mb-14">
            {/* Notice/Link */}
            <div className='flex justify-center text-xs font-[505] tracking-wide my-5'>
                <Image
                    className="w-5 h-4 object-cover mr-1"
                    src='/!icon.png'
                    alt="!"
                    width={1000}
                    height={1000}
                    priority
                />
                <p className="text-red-600">
                    Learn more about previous edition of CS50xNepal <a className="text-blue-500 underline" href="https://cs50xnepal.ioepc.edu.np/">Here!</a>
                </p>
            </div>
            {/* Heading/Introduction */}
            <div className="flex flex-row mt-9">
                <div className="mx-10 lg:ml-40 md:ml-20 sm:mx-10 w-1/2">
                    <p className=" font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-950">CS50xAI</p>
                    <p className="w-96 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 to-yellow-500">The golden duck has returned!!!</p>
                    <p className="w-80 md:w-full text-xs pt-3">Dive into the fundamentals of Artificial intelligence through the renowned CS50 curriculum, now adapted for students in Nepal. Guided by expert instructors from Purwanchal Campus, this course equips you with practical skills and theoretical knowledge in AI,machine learning,and data science. Explore real-world applications,engage with hands-on projects,and join a growing community of future innovators.</p>
                </div>
                {/* Image div */}
                <div className='lg:ml-10 lg:mr-28 md:mx-2  sm:mx-2 hidden sm:block'>
                    <Image
                        className="w-80 h-80"
                        src='/Graphic.png'
                        alt='#'
                        width={1000}
                        height={1000}
                        priority
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default About0
