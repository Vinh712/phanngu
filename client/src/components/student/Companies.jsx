import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-20 pb-10'>
      <div className='max-w-6xl mx-auto text-center px-4'>

        <p className='text-base md:text-lg text-gray-500 tracking-wide'>
          Các học viên đến từ các trường Đại học hàng đầu
        </p>

        <div className='flex items-center justify-center mt-10'>
          <img
            src={assets.instructor_image}
            alt="instructor_image"
            className='w-full max-w-[960px] h-auto object-contain drop-shadow-lg'
          />
        </div>

      </div>
    </div>
  )
}

export default Companies
