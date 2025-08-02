'use client';

import { FaBell } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-[250px] right-0 h-[70px] bg-black flex items-center justify-between px-6 border-b border-gray-800 z-50">
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search everything"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-6 ml-4">
        <FaBell className="text-white text-xl cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="User avatar"
          className="w-10 h-10 rounded-full object-cover border border-gray-600"
        />
      </div>
    </div>
  );
}
