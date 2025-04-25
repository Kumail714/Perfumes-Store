import React from 'react'
import { Link } from 'react-router-dom'
import { Section1img } from '../Assets'

const Section1 = () => {
  return (
    <div className=' flex px-36 relative mb-10 '>
       <div className=' mt-20'>
        <div className='flex flex-col gap-5'>
        <h1>Our commitment to providing</h1>
        <div className='text-[50px] leading-12'>
        <h1 className=' playfair'>The Finest and </h1>
        <h1 className=' .playfair'>Most Luxurious Oud</h1>
        </div>
        <h1>Arabian oud for made us a trusted name in the industry.</h1>
        </div>
        <button className='bg-[#C7A367] w-[144px] h-[47px]  mt-10 rounded-3xl text-white'>
          <Link to={'/product'}>
          Shop Now 
          </Link>
        </button>
        
       </div>
       <div className=' absolute -top-20  right-32'>
        <img className='w-[520px]' src={Section1img} alt="" />
       </div>
    </div>
  )
}

export default Section1
