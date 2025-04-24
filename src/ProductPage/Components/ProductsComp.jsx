import React from 'react'

const ProductsComp = () => {
  return (
   <div className='flex flex-col gap-10 mt-[87px]'>
     <div className='flex gap-4'>
       <ImgAndTxt Img={'src/Home/Assets/bestSeller5.png'}/> 
       <ImgAndTxt Img={'src/Home/Assets/bestSeller3.png'}/> 
       <ImgAndTxt Img={'src/Home/Assets/bestSeller4.png'}/> 
    </div>
    <div className='flex gap-4'>
       <ImgAndTxt Img={'src/Home/Assets/bestSeller1.png'}/> 
       <ImgAndTxt Img={'src/Home/Assets/bestSeller5.png'}/> 
       <ImgAndTxt Img={'src/Home/Assets/bestSeller6.png'}/> 
    </div>
    <div className='flex gap-4'>
       <ImgAndTxt Img={'src/Home/Assets/Aboutoud2.png'}/> 
       <ImgAndTxt Img={'src/Home/Assets/bestSeller3.png'}/> 
       <ImgAndTxt Img={'src/Home/Assets/bestSeller6.png'}/> 
    </div>
    <div className='flex justify-center'>
    <button className='bg-[#C7A367] w-[144px] h-[47px]  mt-10 rounded-3xl text-white'>Explore more</button>

    </div>

   </div>
  )
}

export default ProductsComp
 
const ImgAndTxt = ({Img }) => {
    return(
      <div className=' flex flex-col  gap-1.5 '>
       
     <div className='flex justify-center bg-[#F9F9F9] w-68 '>
      <img  className='h-96 p-14' src={Img} alt="" />
      </div>
        <h1 className='manrope'>Ameer Al-Layl</h1>
        <div className='   flex flex-col   '>
        <h1 className='text-sm text-[#575757]'>Rs.9,300.00 PKR</h1>
        <div className='flex mt-1'>
            <img src="src/Home/Assets/Icons/Vector.png" alt="" />
            <img src="src/Home/Assets/Icons/Vector.png" alt="" />
            <img src="src/Home/Assets/Icons/Vector.png" alt="" />
            <img src="src/Home/Assets/Icons/Vector.png" alt="" />
            <img src="src/Home/Assets/Icons/Vector.png" alt="" />
        </div>
        </div>
        </div>
    )
    }