// app/layout.js or app/dashboard/layout.js
'use client';

import './globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white min-h-screen w-full flex overflow-x-hidden">
        <Sidebar />

        {/* Main content area */}
<div className="flex flex-col flex-1 overflow-x-hidden">
          <Navbar />

          <main className=" bg-black sm:mt-[70px] p-0 sm:p-6 overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
