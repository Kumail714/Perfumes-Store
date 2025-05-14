import React from 'react'
import { Aboutoud2, Aboutoud3, Aboutoud4, Aboutoud5, Aboutoud6, Aboutoud7, bgImage2,Aboutoud1 } from '../Assets'

const AboutOud = () => {
  return (
    <div   style={{ backgroundImage: `url(${bgImage2})` }} className=' md:my-10 sm:my-6 my-4  md:py-16 sm:py-8 py-1 flex md:flex-row flex-col-reverse sm:gap-5 gap-10 items-center justify-between w-[100%]'>
      <div className=' flex justify-end items-center w-[50%]'>
           
        <div   style={{ backgroundImage:`url(${Aboutoud1})` }}  className= 'relative mr-10 sm:h-[457px] h-[300px] bg-no-repeat md:w-1/2 sm:w-full w-[550px] bg-cover '>
           <div className='flex items-center justify-between absolute bottom-0 left-0 w-full h-full'>
            <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"  src={Aboutoud2} alt="" />
           <div className='absolute bottom-0 right-3 md:w-1/2 w-full h-1/2'>
           <img className='absolute -right-16 bottom-2 z-20 ' src={Aboutoud3} alt="" />
            <img className='absolute -bottom-12 z-0 -left-10 ' src={Aboutoud5} alt="" />
            <img className='absolute bottom-0 left-4 z-30 ' src={Aboutoud6} alt="" />
           </div>
            <img className='absolute bottom-0 -left-16  z-20' src={Aboutoud4} alt="" />
           
           </div>
        </div>

      </div>
      <div className=' md:w-[50%] w-[90%] p-2 flex flex-col gap-3 md:mt-14 sm:mt-10 mt-8'>
        <img className='w-40' src={Aboutoud7} alt="" />
        <h1 className='text-3xl  playfair'>About Dihn Al-Oud Perfumes</h1>
        <p className='leading-5 text-sm pr-16 manrope text-[#575757] mt-2.5'>Established in 1993, Dihn Al-Oud Perfumes has been a beacon of fragrance excellence for nearly three decades. Our commitment to providing the finest and most luxurious perfume and Arabian oud for both men and women has made us a trusted name in the industry.</p>
        <ul className='manrope text-[12px] leading-7 '>
            <li className='list-disc'>OUR HERITAGE</li>
            <li  className='list-disc'>OUR RANGE</li>
            <li  className='list-disc'>OUR PHILOSOPHY</li>
            <li  className='list-disc'>GLOBAL PRESENCE</li>
        </ul>
        <button className='bg-[#C7A367] w-[144px] h-[47px]  mt-10 rounded-3xl text-white'>Explore more</button>

      </div>
    </div>
  )
}

export default AboutOud
