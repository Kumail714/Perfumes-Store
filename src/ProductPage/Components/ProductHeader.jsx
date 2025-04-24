import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductHeader = () => {

    const Navgate = useNavigate()
  return (
    <div>
       <div className='bg-[url(src/Home/Assets/bgImage1.png)]' >
    <div className='flex justify-between px-12 items-center py-2'>
      <div>
        <img className='h-[86px] w-auto' src="src/Home/Assets/LOGO-1.png" alt="" onClick={()=> Navgate('/')} />
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
      </div>
    </div>
  )
}

export default ProductHeader
