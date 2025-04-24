import React from 'react'

const Section2 = () => {
  return (
    <div className='flex gap-7 px-20 py-12'>
     <ImgAndTxt img={'src/Home/Assets/section2(1).png'}  txt={'Citrus'}/>
     <ImgAndTxt img={'src/Home/Assets/section2(2).png'}  txt={'Floral'}/>
     <ImgAndTxt img={'src/Home/Assets/section2(3).png'}  txt={'Oud & Woody'}/>
     <ImgAndTxt  img={'src/Home/Assets/section2(4).png'}  txt={'Sweet'}/>
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

