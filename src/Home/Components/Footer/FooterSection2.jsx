import React from 'react'
import { Logo1 } from '../../Assets'
import { FacebookIcon, InstagramIcon, LinkedInIcon, LocationIcon, TimeIcon } from '../../Assets/Icons/Icons'

const FooterSection2 = () => {
  return (
    <div className='flex flex-col '>
    <div className='flex flex-wrap gap-5 justify-between  md:px-20 px-5 my-12 '>
      <div className='flex flex-col justify-center items-start sm:items-start  lg:w-[23%] md:w-[30%] xs:w-[47%] w-full   '>
      <div>
        <img src={Logo1} alt="" />
      </div>
      <div className='flex gap-2 mt-16 py-4 '>
        <h1>Follow Us</h1>
        <img src={FacebookIcon} alt="" />
        <img src={LinkedInIcon} alt="" />
        <img src={InstagramIcon} alt="" />
      </div>
      </div>
      <div className=' flex flex-col items-start  lg:w-[23%] md:w-[30%] xs:w-[47%] w-full  py-4'>
        <h1 className='font-semibold mb-4'>Menu</h1>
        <div className=' flex flex-col  sm:items-start  leading-7'>
        <h2>Home</h2>
        <h2>About Us</h2>
        <h2>To Sellers</h2>
        <h2>Fragrance</h2>
        <h2>Find your Perfume</h2>
        </div>
      </div>
    
      <div className=' lg:w-[23%] md:w-[30%] xs:w-[47%] w-full  py-4'>
        <h1 className='flex flex-col items-start  font-semibold mb-4'>Need Help</h1>
        <div className='flex flex-col  sm:items-start leading-7'>
        <h2 className='' >Return</h2>
        <h2>Delivery </h2>
        <h2>Privacy Policy</h2>
        <h2>Payments</h2>
        <h2>Terms and Conditions </h2>
        </div>
      </div>
      <div className='flex flex-col items-start  gap-4 lg:w-[23%] md:w-[30%] xs:w-[47%] w-full  py-4'>
        <div className='flex flex-col gap-4'>
        <h1 className='font-semibold'>Contact Us</h1>
        <div className='flex gap-3  items-center'>
            <img className='h-7' src={LocationIcon} alt="" />
            <div>
            <p>10 Wilmslow Road, </p>
            <p>Manchester, M14 5TB</p>
            </div>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
        <h1 className='font-semibold'>Opening Hours</h1>
        <div className='flex gap-3  items-center'>
            <img className='h-7' src={TimeIcon} alt="" />
            <div>
            <p>Everyday from  </p>
            <p>12:00PM to 11:00PM</p>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div className='h-[1px] bg-gray-400 mx-20'></div>
    </div>
  )
}

export default FooterSection2
