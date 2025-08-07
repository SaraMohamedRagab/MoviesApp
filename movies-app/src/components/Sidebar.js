'use client';
import { useState } from 'react';
import {
  FaHome, FaFire, FaUserFriends, FaVideo, FaList, FaTimes, FaBars,
} from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger icon (visible on all screens) */}
      <div className="fixed top-4 left-4 z-50 overflow-x-hidden">
        <button onClick={toggleSidebar} className="text-white bg-black p-2 rounded shadow-md text-2xl cursor-pointer">
          {isOpen ? <FaTimes  className="text-xl" /> : <FaBars className="text-xl"/>}
        </button>
      </div>

      {/* Sidebar overlay (only shown when isOpen) */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-[250px] bg-black text-white z-40 p-6 overflow-y-auto overflow-x-hidden">
          <button onClick={toggleSidebar} className="text-white text-2xl absolute top-4 right-4 cursor-pointer">
          </button>
          <SidebarContent />
        </div>
      )}
    </>
  );
}

function SidebarContent() {
  return (
    <div className="mt-10">
      <nav className="flex flex-col gap-6">
        <SidebarLink icon={<FaHome />} label="Browse" />
        <SidebarLink icon={<FaFire />} label="Trending" />
        <SidebarLink icon={<FaUserFriends />} label="Following" />
        <SidebarLink icon={<FaVideo />} label="Your Videos" />
        <SidebarLink icon={<FaList />} label="Playlist" />
      </nav>

      <div className="mt-10">
        <h2 className="text-sm font-semibold text-gray-400 mb-2">Following</h2>
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <p>👤 Ikako.t</p>
          <p>👤 Nick.B</p>
          <p>👤 Jessie.J</p>
          <p className="text-blue-500 cursor-pointer">Load more...</p>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ icon, label }) {
  return (
    <div className="flex items-center gap-3 text-white hover:text-red-500 cursor-pointer">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
