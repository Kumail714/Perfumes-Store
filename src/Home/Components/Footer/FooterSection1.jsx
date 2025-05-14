import React from 'react'
import { Fsec1Image, Fsec2Image, Fsec3Image, Fsec4Image } from '../../Assets/Icons/Icons'

const FooterSection1 = () => {
  return (
    <>
    <div className='flex flex-wrap justify-between gap-4 md:py-12 py-6  md:px-12 lg:px-20  px-4'>
    <IconsAndText Img={Fsec1Image} Txt1={'Free Shipping'} Txt2={'Free shipping on all orders of $ 50 and above.'} />
    <IconsAndText Img={Fsec2Image} Txt1={'Secure Payment'} Txt2={'FYour payment details are always secure.'} />
    <IconsAndText Img={Fsec3Image} Txt1={'Support'} Txt2={'Four Customer support is always there for you.'} />
     <IconsAndText Img={Fsec4Image} Txt1={'Complimentary'} Txt2={'Buy 100ml, get 10ml extra absolutely free.'} />
     </div>
     <div className='h-[1px] bg-gray-500 mx-20'></div>
    </>
  )
}

export default FooterSection1


const IconsAndText = ({Img , Txt1 , Txt2}) =>{

    return (
        <div className=' flex justify-center items-center lg:w-[23%] md:w-[30%] xs:w-[47%] w-full px-4 py-4 gap-3 bg-[#FFFFFF] rounded-lg '>
       <img className='w-10 h-10' src={Img} alt="" /> 
       <div className='flex flex-col gap-1'>
        <h1 className='manrope text-[#575757] text-[16px]'>{Txt1}</h1>
        <p className='manrope w-[165px] leading-5 text-[12px] text-[#575757]'>{Txt2}</p>
       </div>
        </div>
    )
}