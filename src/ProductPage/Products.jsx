import React from 'react'
import SideBar from './Components/SideBar'
import ProductsComp from './Components/ProductsComp'
import ProductHeader from './Components/ProductHeader'

const Products = () => {
  return (
    <>
    <ProductHeader/>
    <div className='flex w-[100%] gap-5 px-10 my-10'>
     <div className='w-[25%]'> <SideBar/></div>
      <div className='w-[75%]'><ProductsComp/></div> 
    </div>
    </>
  )
}

export default Products
