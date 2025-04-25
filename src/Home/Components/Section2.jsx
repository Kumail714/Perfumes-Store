import React from 'react'
import { Section1img, Section2_2, Section2_3, Section2_4, Section2img } from '../Assets'

const Section2 = () => {
  return (
    <div className='flex gap-7 px-20 py-12'>
     <ImgAndTxt img={Section2img}  txt={'Citrus'}/>
     <ImgAndTxt img={Section2_2}  txt={'Floral'}/>
     <ImgAndTxt img={Section2_3}  txt={'Oud & Woody'}/>
     <ImgAndTxt  img={Section2_4}  txt={'Sweet'}/>
    </div>
  )
}

export default Section2

const ImgAndTxt = ({img , txt}) => {
return(
  <div className='flex flex-col h-96 gap-4 relative w-full'>
  <div className=''>
  <img  className=' absolute top-0 right-0 z-40' src={img} alt="" />
    </div>
    <div className=' absolute bottom-0 w-full  flex flex-col justify-end items-start bg-white px-3  py-4  rounded-xl h-64 shadow-lg'>
    <h1 className=' font-semibold'>{txt}</h1>
    <h1 className='text-sm text-[#575757]'>Arabian oud for made us a trusted name in the industry.</h1>
    </div>
    </div>
)
}

