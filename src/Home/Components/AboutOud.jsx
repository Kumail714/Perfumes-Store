import React from 'react'

const AboutOud = () => {
  return (
    <div className='bg-[url(src/Home/Assets/bgImage2.png)] my-10 py-16 flex gap-5 items-center justify-between w-[100%]'>
      <div className=' flex justify-end items-center w-[50%]'>
           
        <div  className= 'relative mr-10 bg-[url(src/Home/Assets/Aboutoud1.png)] h-[457px] bg-no-repeat w-1/2'>
           <div className='flex items-center justify-between absolute bottom-0 left-0 w-full h-full'>
            <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"  src="src/Home/Assets/Aboutoud2.png" alt="" />
           <div className='absolute bottom-0 right-3 w-1/2 h-1/2'>
           <img className='absolute -right-16 bottom-2 z-20 ' src="src/Home/Assets/Aboutoud3.png" alt="" />
            <img className='absolute -bottom-12 z-0 -left-10 ' src="src/Home/Assets/Aboutoud5.png" alt="" />
            <img className='absolute bottom-0 left-4 z-30 ' src="src/Home/Assets/Aboutoud6.png" alt="" />
           </div>
            <img className='absolute bottom-0 -left-16  z-20' src="src/Home/Assets/Aboutoud4.png " alt="" />
           
           </div>
        </div>

      </div>
      <div className=' w-[50%] p-2 flex flex-col gap-3 mt-14'>
        <img className='w-40' src="src/Home/Assets/Aboutoud7.png" alt="" />
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
