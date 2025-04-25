import React from 'react'
import { Product1, Product2, Product3, Product44 } from '../../ProductPage/Assets/ProductAssets'

const LuxuriosOud = () => {
  return (
    <div className='h-[500px] bg-[url(src/Home/Assets/bgImage1.png)] flex justify-between '>
     <div className=' relative flex items-center  '>
      <img className='h-72 px-14' src={Product1} alt="" />
      <img className='h-76 absolute right-42 top-40 ' src={Product2} alt="" />
      <img className='h-20 absolute bottom-8 left-28 ' src={Product44} alt="" />
      <img className='h-36 absolute bottom-4 right-16' src={Product3} alt="" />
     </div>
     <div className='w-[50%] flex flex-col justify-center gap-5 p-2 mt-28 '>
       <div>
       <h1 className='text-5xl playfair'>The finest and</h1>
       <h1 className='text-5xl playfair'>Most luxurious Oud</h1>
       </div>
        <p className='w-[550px] text-[#575757] leading-5 manrope'>Established in 1993, Dihn Al-Oud Perfumes has been a beacon of fragrance excellence for nearly three decades. </p>
        <button className='bg-[#C7A367] w-[144px] h-[47px]  mt-10 rounded-3xl text-white'>Explore more</button>
     </div>
    </div>
  )
}

export default LuxuriosOud
