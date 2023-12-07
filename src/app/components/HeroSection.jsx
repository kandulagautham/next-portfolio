"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
         initial={{opacity:0,scale:0.5}}
         animate={{opacity:1,scale:1}}
         transition={{duration:0.5}}
         className='col-span-7 place-self-center text-center sm: text-left'>
          <h1 className="text-white mb-4 lg:text-6xl text-4xl sm:text-5xl  font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-400 to-green-400">Hello I&apos;m {''}</span>
          <br/>
          <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Gautham Saaketh Kandula',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'AI Enthusiast',
                1000,
                'Tech Geek',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Hi, I am Gautham Saaketh Kandula and welcome to my portfolio website</p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-teal-400 to-green-400 text-white'>Hire Me</button>
            <a href="/GAUTHAM_SAAKETH_RESUME.pdf" download><button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent  text-white border border-image mt-2'><span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-400 to-green-400">Download CV</span></button></a>
          </div>
        </motion.div>
        <motion.div
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        className='col-span-5 place-self-center  ml-4 mt-4 lg:mt-0'>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
           <Image
              src="/dp_3.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection