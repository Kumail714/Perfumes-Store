import React from 'react'
import { Clients1 } from '../Assets'
import { CLIIcon, VectorIcon } from '../Assets/Icons/Icons'

const Clients = () => {
  return (
    <div className='p-2'>
      <div className='flex flex-col justify-center items-center gap-3 px-[280px] py-14'>
       <h1 className='text-5xl playfair'>What say our Clients</h1>
       <p  className='manrope text-[#000000B2] text-center leading-05'>We love what we do and it shows! Here’s some of the things our customers have had to say about our repair services in Sydney.</p>
      </div>
    <div className='flex px-20 gap-5'>
    <ImgAndTxt Img={Clients1} Txt1={'Adnan'}
     Txt2={'Beautiful, recommended this to all my family'}/> 

     <ImgAndTxt Img={Clients1} Txt1={'James'}
     Txt2={'The best place for oud and fragrances in the UK, third time shopping here'}/> 

     <ImgAndTxt Img={Clients1} Txt1={'Jessica'}
     Txt2={'Tried a lot of perfumes in the uk but this one truly caught my eye, highly recommend the Amber gold'}/> 

    </div>

    <div className='flex gap-3 items-center justify-center mt-10'>
        <div className='h-1 w-10 bg-gray-500'></div>
        <div className='h-1 w-10 bg-gray-500'></div>
        <div className='h-1 w-10 bg-amber-700'></div>
    </div>

    </div>
  )
}

export default Clients



const ImgAndTxt = ({Img , Txt1, Txt2})=> {

    return(
        <div className=' bg-[#F9F9F9] flex flex-col p-6 w-[33%] rounded-lg'>
        <div className= ' flex flex-col gap-2 h-32'>
        <div className='flex gap-3'>
            <img src={Img} alt="" />
            <div>
                <h1 className='font-semibold text-[#595959]'>{Txt1}</h1>
                <h1 className='text-sm text-[#595959]'>Co_Founder</h1>
            </div>
         </div>
         <p className=' text-[15px] text-[#5B5B5B] open-sans'>{Txt2}</p>
        </div>
         <div className='flex justify-between items-end mt-11'>
         <div className='flex gap-0.5 '>
            <img src={VectorIcon} alt="" />
            <img src={VectorIcon} alt="" />
            <img src={VectorIcon} alt="" />
            <img src={VectorIcon} alt="" />
            <img src={VectorIcon} alt="" />

        </div>
        <img src={CLIIcon} alt="" />
         </div>
        </div>
    )
}