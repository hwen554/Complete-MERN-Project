import React from 'react'
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className='md:w-1/2'>
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>

        <div className='md:w-1/2'>
          <div className='text-left md:w-4/5'>
            <p className='text-red uppercase tracking-wide font-semibold text-lg'>Testimonials</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials