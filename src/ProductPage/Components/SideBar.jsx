import React from 'react'

const SideBar = () => {
  return (
    <div>   
   <div>
    <h1 className='text-4xl py-6 playfair'>Product</h1> 
    </div> 
   <div className='flex flex-col gap-1.5 '>
   <CustomDiv Txt={'Featured'}/>
   <CustomDiv Txt={'Best Selling'}/>
   <CustomDiv Txt={'Alphabetically A - Z '}/>
   <CustomDiv Txt={'Alphabetically Z - A '}/>
   <CustomDiv Txt={'Price Low to High '}/>
   <CustomDiv Txt={'Price High to Low '}/>
   <CustomDiv Txt={'Date Old to New '}/>
   <CustomDiv Txt={'Date Old to New '}/>
   </div>
    </div>
  )
}

export default SideBar


const CustomDiv = ({Txt}) =>{
return (
    <div className='bg-[#F1F4F8] py-3 px-4 hover:bg-[#C7A367] hover:text-white rounded-sm'>
     <h1>{Txt}</h1>
    </div>
)

}