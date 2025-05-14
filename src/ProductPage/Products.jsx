import React from 'react'
import SideBar from './Components/SideBar'
import ProductsComp from './Components/ProductsComp'
import ProductHeader from './Components/ProductHeader'

const Products = () => {
  return (
    <>
    <ProductHeader/>
    <div className='flex md:flex-row flex-col w-[100%] gap-5 px-10 my-10'>
     <div className='md:w-[25%] w-auto'> <SideBar/></div>
      <div className='md:w-[75%] w-full'><ProductsComp/></div> 
    </div>
    </>
  )
}

export default Products
