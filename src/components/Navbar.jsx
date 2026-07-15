import React from 'react';
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";
const Navbar = () => {
  return (
    <div className='w-full shadow-md'>
          <div  className="h-20 px-10 flex items-center justify-between bg-white">
              <div className=' text-3xl font-bold text-red-700'>
                  Jwellery
              </div>

              <div className='search w-[45%] relative'>
                  <input type="text" className='w-full border rounded-full py-3 pl-12 pr-4 outline-none' placeholder='Search ........' />

                   <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />
              </div>
              <div className="flex gap-6 text-2xl text-gray-700">
          <FiHeart className="cursor-pointer hover:text-red-600" />
          <FiUser className="cursor-pointer hover:text-red-600" />
          <FiShoppingBag className="cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
