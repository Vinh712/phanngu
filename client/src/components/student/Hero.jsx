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

      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Thời điểm tốt nhất để trồng một cái cây là 20 năm trước. <span className='text-blue-600'> Thời điểm tốt thứ hai là ngay bây giờ. </span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>NLS được hình thành với sứ mệnh nâng đỡ người học thông qua tri thức cốt lõi của IELTS và IT. Bởi chúng tôi tin rằng: người chủ động bắt đầu sớm sẽ là người nắm giữ lợi thế dài lâu. Chúng tôi mang đến giáo trình chuẩn mực, giảng viên uy tín và môi trường học thuật giúp bạn phát triển một cách có định hướng.</p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'> Chúng tôi kết nối những giảng viên giàu kinh nghiệm để hỗ trợ bạn đạt được mục tiêu học tập và phát triển nghề nghiệp.</p>

      <SearchBar />
    </div>
  )
}

export default Hero
