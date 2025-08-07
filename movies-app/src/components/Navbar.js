'use client';

import Image from 'next/image';
import { FaBell } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 
      h-[60px] sm:h-[70px] 
      bg-black flex items-center justify-between 
      px-2 sm:px-6 border-b border-gray-800 z-20 overflow-x-hidden"
    >
     <div className="text-white mt-2.5 text-sm sm:text-xl ml-15 sm:ml-20 font-semibold sm:font-bold whitespace-nowrap">
  🎬 Movie App
</div>


      <div className="flex-1 flex justify-center">
        <div className="sm:w-full w-[130px] sm:max-w-sm md:max-w-md lg:max-w-lg">
          <input
            type="text"
            placeholder="Search everything"
            className="w-full 
              px-1 py-1.5 
              sm:px-4 sm:py-2 
              md:px-5 md:py-2.5 
              lg:px-6 lg:py-3 
              text-sm sm:text-base md:text-lg 
              rounded-lg bg-gray-800 text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-1 sm:gap-4 md:gap-6 ml-1 sm:ml-4 shrink-0">
        <FaBell className= "text-white text-xl sm:text-lg md:text-xl cursor-pointer " />
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
          <Image
            src="https://i.pravatar.cc/40?img=12"
            alt="User avatar"
            fill
            className="rounded-full object-cover border border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
