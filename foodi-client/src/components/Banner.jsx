import React from 'react'
import bannerImg from '../../public/images/home/banner.png'
const Banner = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
            <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
                {/* texts */}
                <div className="md:w-1/2 px-4 space-y-7">
                    <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                        Dive into Delights Of Delectable <span className="text-green">Food</span>
                    </h2>
                    <p className="text-[#4A4A4A] text-xl">
                        Where Each Plate Weaves a Story of Culinary Mastery and Passionate
                        Craftsmanship
                    </p>
                    <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
                        Order Now
                    </button>
                </div>

                {/* images */}
                <div className='md:w-1/2'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner