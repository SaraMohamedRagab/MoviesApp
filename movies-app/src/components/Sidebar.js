'use client';

import { FaHome, FaFire, FaUserFriends, FaVideo, FaList } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-[250px] bg-black text-white p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">🎬 Movie App</h1>

        <nav className="flex flex-col gap-6">
          <SidebarLink icon={<FaHome />} label="Browse" />
          <SidebarLink icon={<FaFire />} label="Trending" />
          <SidebarLink icon={<FaUserFriends />} label="Following" />
          <SidebarLink icon={<FaVideo />} label="Your Videos" />
          <SidebarLink icon={<FaList />} label="Playlist" />
        </nav>
      </div>

      <div>
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
