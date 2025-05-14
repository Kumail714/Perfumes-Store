import React from 'react'
import { Footer1, Footer2, Footer3, Footer4, Footer5, Footer6 } from '../../Assets'


const FooterSection3 = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4 sm:justify-between justify-start items-start px-5  sm:px-20  py-2 mt-2  '>
    <div className='flex'>
        <h1>Copyright © 2025 Perfumes</h1>    
    </div>  
    <div className='flex '>
       <img src={Footer1} alt="" /> 
       <img src={Footer2} alt="" /> 
       <img src={Footer3} alt="" /> 
       <img src={Footer4} alt="" /> 
       <img src={Footer5} alt="" /> 
       <img src={Footer6} alt="" /> 
    </div>
    </div>
  )
}

export default FooterSection3
