import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Home/Components/Header'
import Footer from './Home/Components/Footer/Footer'

const Layout = () => {
  return (
    <div>
 
    <Outlet/>
    
    <Footer/>
      
    </div>
  )
}

export default Layout
