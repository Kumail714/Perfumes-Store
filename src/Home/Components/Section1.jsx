import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Section1img } from '../Assets'



const Section1 = () => {
 
const nangation = useNavigate()
  return (
    <div className=' relative -top-4 flex md:items-center items-start lg:flex-row md:flex-row sm:flex-col  lg:px-36 md:px-24 sm:px-16 px-8  mb-10 '>
       <div className=' mt-20 md:w-[50%] w-full'>
        <div className='flex flex-col md:gap-5 gap-3 '>
        <h1>Our commitment to providing</h1>
        <div className=' lg:text-[50px] md:text-[35px] sm:text-[25px] text-2xl font-medium  md:leading-12 leading-9'>
        <h1 className=' playfair '>The Finest and </h1>
        <h1 className=' playfair'>Most Luxurious Oud</h1>
        </div>
        <h1>Arabian oud for made us a trusted name in the industry.</h1>
        </div>
        <button className='bg-[#C7A367] md:px-10 px-6 md:py-3 py-2 mt-10 rounded-3xl text-white cursor-pointer' onClick={()=> nangation('/product') }>
           
          Shop Now 
        
        </button>
        
       </div>
       <div className='-mt-20 md:block hidden w-[50%] '>
        <img className='w-full' src={Section1img} alt="" />
       </div>
    </div>
  )
}

export default Section1
