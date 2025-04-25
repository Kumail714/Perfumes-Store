import React from 'react'
import Section1 from './Section1'
import Image1 from '../Assets/LOGO-1.png'
const Header = () => {
  return (
  <div className=' h-screen bg-[url(src/Home/Assets/bgImage1.png)]' >
    <div className='flex justify-between px-12 py-5 mt-2'>
      <div>
        <img src={Image1} alt="" />
      </div>
      <div className='flex gap-4 text-sm manrope'>
        <h1 className='cursor-pointer'>TOP SELLERS</h1>
        <h1 className='cursor-pointer'>ABOUT US</h1>
        <h1 className='cursor-pointer '>FRAGRANCE</h1>
        <h1 className='cursor-pointer'>FIND YOUR RESUME</h1>
      </div>
      <div className='flex gap-4'>
        <img  className='h-4' src="src/Home/Assets/icons/Search.png" alt="" />
        <img  className='h-4' src="src/Home/Assets/icons/Favorites.png" alt="" />
        <img  className='h-4'src="src/Home/Assets/icons/Shoping.png" alt="" />
      </div>
    </div>
    <Section1/>
    </div>
  )
}

export default Header
