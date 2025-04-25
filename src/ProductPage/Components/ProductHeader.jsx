import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo1 } from '../../Home/Assets'
import { FavoritesIcon, SearchIcon, ShoppingIcon } from '../../Home/Assets/Icons/Icons'

const ProductHeader = () => {

    const Navgate = useNavigate()
  return (
    <div>
       <div className='bg-[url(src/Home/Assets/bgImage1.png)]' >
    <div className='flex justify-between px-12 items-center py-2'>
      <div>
        <img className='h-[86px] w-auto' src={Logo1} alt="" onClick={()=> Navgate('/')} />
      </div>
      <div className='flex gap-4 text-sm manrope'>
        <h1 className='cursor-pointer'>TOP SELLERS</h1>
        <h1 className='cursor-pointer'>ABOUT US</h1>
        <h1 className='cursor-pointer '>FRAGRANCE</h1>
        <h1 className='cursor-pointer'>FIND YOUR RESUME</h1>
      </div>
      <div className='flex gap-4'>
        <img  className='h-4' src={SearchIcon} alt="" />
        <img  className='h-4' src={FavoritesIcon} alt="" />
        <img  className='h-4'src={ShoppingIcon} alt="" />
      </div>
    </div>
      </div>
    </div>
  )
}

export default ProductHeader
