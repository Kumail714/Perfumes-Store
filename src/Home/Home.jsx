import React from 'react'
import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import AboutOud from './Components/AboutOud'
import BestSeller from './Components/BestSeller'
import LuxuriosOud from './Components/LuxuriosOud'
import Clients from './Components/Clients'
import Footer from './Components/Footer/Footer'


const Home = () => {
  return (
    <>
       <Header/>
       <Section2/>
       <AboutOud/>
       <BestSeller/>
       <LuxuriosOud/>
       <Clients/> 
    </>
  )
}

export default Home
