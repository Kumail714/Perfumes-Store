import React from 'react'
import { BestSeller1, BestSeller2, BestSeller3, BestSeller4 } from '../Assets'
import { VectorIcon } from '../Assets/Icons/Icons'

const BestSeller = () => {
  return (
    <div className='py-14 px-10'>
    <h1 className='text-4xl playfair'>Best Seller</h1>
    <div className=' flex  justify-between  py-5 '>
       <div ><ImgAndTxt  img={BestSeller1}/></div>
       <div ><ImgAndTxt  img={BestSeller2}/></div>
       <div ><ImgAndTxt  img={BestSeller3}/></div>
       <div ><ImgAndTxt  img={BestSeller4}/></div>
      
    </div>
    </div>
  )
}

export default BestSeller

const ImgAndTxt = ({img }) => {
    return(
      <div className=' flex flex-col  gap-1.5 '>
       
     <div className='flex justify-center bg-[#F9F9F9] w-68 '>
      <img  className='h-80 p-14' src={img} alt="" />
      </div>
        <h1 className='manrope'>Ameer Al-Layl</h1>
        <div className='   flex flex-col   '>
        <h1 className='text-sm text-[#575757]'>Rs.9,300.00 PKR</h1>
        <div className='flex mt-1'>
            <img src={VectorIcon} alt="" />
            <img src={VectorIcon} alt="" />
            <img src={VectorIcon} alt="" />
            <img src={VectorIcon} alt="" />
            <img src={VectorIcon} alt="" />
       
        </div>
        </div>
        </div>
    )
    }