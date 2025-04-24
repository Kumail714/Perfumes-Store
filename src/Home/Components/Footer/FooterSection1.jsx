import React from 'react'

const FooterSection1 = () => {
  return (
    <div>
    <div className='flex justify-between py-12 px-20'>
    <IconsAndText Img={'src/Home/Assets/Icons/Fsec1.png'} Txt1={'Free Shipping'} Txt2={'Free shipping on all orders of $ 50 and above.'} />
    <IconsAndText Img={'src/Home/Assets/Icons/Fsec2.png'} Txt1={'Secure Payment'} Txt2={'FYour payment details are always secure.'} />
    <IconsAndText Img={'src/Home/Assets/Icons/Fsec3.png'} Txt1={'Support'} Txt2={'Four Customer support is always there for you.'} />
     <IconsAndText Img={'src/Home/Assets/Icons/Fsec4.png'} Txt1={'Complimentary'} Txt2={'Buy 100ml, get 10ml extra absolutely free.'} />
     </div>
     <div className='h-[1px] bg-gray-500 mx-20'></div>
    </div>
  )
}

export default FooterSection1


const IconsAndText = ({Img , Txt1 , Txt2}) =>{

    return (
        <div className=' flex justify-center items-center px-4 py-4 gap-3 bg-[#FFFFFF] rounded-lg '>
       <img className='w-10 h-10' src={Img} alt="" /> 
       <div className='flex flex-col gap-1'>
        <h1 className='manrope text-[#575757] text-[16px]'>{Txt1}</h1>
        <p className='manrope w-[165px] leading-5 text-[12px] text-[#575757]'>{Txt2}</p>
       </div>
        </div>
    )
}