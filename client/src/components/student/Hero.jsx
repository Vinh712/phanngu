import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      {/* <h1 className="text-5xl font-bold text-pink-500 m-10 mt-0 underline running-text">
  In Development mode
</h1> */}

      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>The best time to plant a tree was 20 years ago<span className='text-blue-600'> The second best time is right now. </span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>NLS was founded with the mission of empowering learners through the core knowledge of IELTS and IT. We believe that those who take initiative and start early will always hold a long-term advantage.
We provide a rigorous curriculum, trusted instructors, and an academic environment designed to help you grow with clarity and purpose.</p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'> We bring together experienced instructors to help you achieve your learning goals and advance your professional growth.</p>

      <SearchBar />
    </div>
  )
}

export default Hero
