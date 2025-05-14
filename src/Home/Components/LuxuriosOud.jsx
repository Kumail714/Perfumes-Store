import React from 'react'
import { Product1, Product2, Product3, Product44 } from '../../ProductPage/Assets/ProductAssets'
import { bgImage1 } from '../Assets'

const LuxuriosOud = () => {
  return (
<div
  style={{ backgroundImage: `url(${bgImage1})` }}
  className="h-auto flex flex-col md:flex-row items-center md:justify-between p-4"
>
  <div
    style={{ backgroundImage: `url(${Product1})` }}
    className="relative w-full md:w-1/2 h-80 bg-contain bg-no-repeat flex items-center justify-center overflow-hidden"
  >
    <img className="h-72 md:h-72 sm:h-72 w-auto absolute object-contain  top-4" src={Product2}alt=""/>
    <img className="sm:h-20 h-20 absolute bottom-0 sm:left-10 left-0" src={Product44} alt=""/>
    <img  className="sm:h-36 h-24 absolute -bottom-5 sm:right-6 right-0" src={Product3}alt=""/>
  </div>

  <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 mt-10 md:mt-28 p-4">
    <div>
      <h1 className="text-4xl md:text-5xl playfair">The finest and</h1>
      <h1 className="text-4xl md:text-5xl playfair">Most luxurious Oud</h1>
    </div>
    <p className="text-[#575757] leading-6 manrope">
      Established in 1993, Dihn Al-Oud Perfumes has been a beacon of fragrance excellence for nearly three decades.
    </p>
    <button className="bg-[#C7A367] w-36 h-12 mt-6 rounded-3xl text-white">
      Shop Now
    </button>
  </div>
</div>

  )
}

export default LuxuriosOud
