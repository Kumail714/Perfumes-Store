import React, { useState } from 'react'
import Section1 from './Section1'
import { bgImage1, Logo1 } from '../Assets'
import { FavoritesIcon, SearchIcon, ShoppingIcon } from '../Assets/Icons/Icons'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Header = () => {

 const [visible , setvisible] = useState(false)

  return (
  <div className=' h-screen '   style={{ backgroundImage: `url(${bgImage1})` }} >
    <div className='flex justify-between md:items-start items-center   px-12 py-5 mt-2'>
      
  <IoIosMenu className=' md:hidden block ' onClick={()=> setvisible(true)}/>
      <div>
        <img className='lg:w-full md:w-[70%] sm:w-[60%] w-[50%]' src={Logo1} alt="" />
      </div>
      <div className={`flex gap-4  text-sm manrope md:static absolute top-0 left-0 md:flex-row flex-col md:bg-transparent bg-gray-200 md:h-auto h-screen md:p-0 px-3 py-5 md:w-auto  sm:w-[30%] m:mt-20 w-50 z-50 md:translate-x-0
        ${visible? '-translate-x-0' : '-translate-x-[100%] '}  transition-all lg:mr-20 mr-0`}>
        <IoClose className='absolute  top-5 right-5 md:hidden block ' onClick={()=>setvisible(false)}/>
        <h1 className='cursor-pointer'>TOP SELLERS</h1>
        <h1 className='cursor-pointer'>FRAGRANCE</h1>
        <h1 className='cursor-pointer'>FIND YOUR PERFUMES</h1>
        <h1 className='cursor-pointer'>ABOUT US</h1>
      </div>
      <div className='flex gap-4'>
        <img  className='h-4' src={SearchIcon} alt="" />
        <img  className='h-4' src={FavoritesIcon} alt="" />
        <img  className='h-4' src={ShoppingIcon} alt="" />
      </div>
    </div>
    <Section1/>
    </div>
  )
}

export default Header
