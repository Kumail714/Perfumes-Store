import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(prev => !prev);
  };

  // ✅ Add/remove overflow-hidden to body when sidebar is open
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isVisible]);

  return (
    <div className='relative'>
      {/* ✅ Full-screen overlay */}
      {isVisible && (
        <div 
          onClick={toggleSidebar}
          className='fixed inset-0 bg-black opacity-40 z-10'
        ></div>
      )}

      <div className="flex justify-between items-center">
        <h1 className='text-4xl py-6 playfair'>Product</h1>
        <IoIosMenu className='md:hidden block text-3xl cursor-pointer' onClick={toggleSidebar} />
      </div>

      {/* ✅ Sidebar with slide-in effect */}
      <div className={`${isVisible ? 'translate-x-0' : '-translate-x-full'} 
        w-[250px] md:w-auto h-screen bg-white flex flex-col gap-1.5 
        md:static fixed top-0 left-0 transition-transform duration-300 
        md:translate-x-0 z-20 md:p-0 p-2`}>
        <CustomDiv Txt={'Featured'} />
        <CustomDiv Txt={'Best Selling'} />
        <CustomDiv Txt={'Alphabetically A - Z'} />
        <CustomDiv Txt={'Alphabetically Z - A'} />
        <CustomDiv Txt={'Price Low to High'} />
        <CustomDiv Txt={'Price High to Low'} />
        <CustomDiv Txt={'Date Old to New'} />
        <CustomDiv Txt={'Date New to Old'} />
      </div>
    </div>
  );
};

export default SideBar;

const CustomDiv = ({ Txt }) => {
  return (
    <div className='bg-[#F1F4F8] py-3 px-3 lg:px-4 hover:bg-[#C7A367] hover:text-white rounded-sm cursor-pointer'>
      <h1>{Txt}</h1>
    </div>
  );
};
