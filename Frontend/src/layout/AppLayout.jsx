import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='min-h-screen bg-slate-100'>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40 md:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className='md:ml-64 flex flex-col min-h-screen'>
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className='flex-1 p-4 md:p-6'>{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
