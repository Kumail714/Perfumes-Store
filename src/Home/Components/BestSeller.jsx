import React from 'react';
import { BestSeller1, BestSeller2, BestSeller3, BestSeller4 } from '../Assets';
import { VectorIcon } from '../Assets/Icons/Icons';

const BestSeller = () => {
  return (
    <div className="py-14 px-4 sm:px-6 md:px-10 ">
      <h1 className="text-4xl playfair text-center mb-8">Best Seller</h1>
      <div className="flex flex-wrap justify-between  gap-6">
        <ImgAndTxt img={BestSeller1} />
        <ImgAndTxt img={BestSeller2} />
        <ImgAndTxt img={BestSeller3} />
        <ImgAndTxt img={BestSeller4} />
      </div>
    </div>
  );
};

export default BestSeller;

const ImgAndTxt = ({ img }) => {
  return (
    <div className="flex flex-col w-full  xs:w-[47%] md:w-[30%] lg:w-[22%] gap-2">
      <div className="flex justify-center bg-[#F9F9F9] w-full">
        <img className="h-80 p-10" src={img} alt="" />
      </div>
      <h1 className="manrope text-lg">Ameer Al-Layl</h1>
      <div className="flex flex-col">
        <h2 className="text-sm text-[#575757]">Rs.9,300.00 PKR</h2>
        <div className="flex mt-1 space-x-1">
          <img src={VectorIcon} alt="" />
          <img src={VectorIcon} alt="" />
          <img src={VectorIcon} alt="" />
          <img src={VectorIcon} alt="" />
          <img src={VectorIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
