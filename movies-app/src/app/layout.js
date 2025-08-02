import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './globals.css'; 

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#111] text-white min-h-screen flex">
        <Sidebar />

        <div className="flex flex-col flex-1 ml-[250px]">
          <Navbar />

          <main className="mt-[70px] p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
