import React from 'react'

const SpecialDishes = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
          <div className='text-left'>
              <p className='subtitle'>Customer Favorites</p>
              <h2 className='title'>Popular Catagories</h2>
          </div>

          <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
              <button onClick={() => slider?.current?.slickPrev()}
                  className=" btn p-2 rounded-full ml-5"
              >
                  <FaAngleLeft className=" h-8 w-8 p-1" />
              </button>
          </div>
    </div>
  )
}

export default SpecialDishes