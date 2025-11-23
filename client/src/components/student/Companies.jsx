import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>
        Các học viên đến từ các trường Đại học hàng đầu
      </p>

    <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>

      <img src={assets.instructor_image} alt="hutech_logo" className='h-12 md:h-16 object-contain' />

    </div>
    </div>
  )
}

export default Companies
