import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home/Home'
import Products from './ProductPage/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import ProductsComp from './ProductPage/Components/ProductsComp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='product' element={<Products/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
