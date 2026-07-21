import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ setSidebarOpen }) => {
  const { user } = useAuth();
  const location = useLocation();

  const pageTitles = {
    "/searchjobs": "Search Jobs",
    "/jobs": "Jobs",
    "/add-job": "Add Job",
    "/analytics": "Analytics",
    "/profile": "Profile",
  };

  return (
    <header className='bg-white shadow-sm border-b px-4 md:px-8 py-4 flex items-center justify-between'>
      {/* Left Side */}
      <div className='flex items-center gap-4'>
        {/* Mobile Menu */}
        <button
          className='md:hidden text-2xl text-slate-700'
          onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>

        {/* Page Title */}
        <h2 className='text-xl md:text-2xl font-semibold text-slate-800'>
          {pageTitles[location.pathname] || "Job Tracker"}
        </h2>
      </div>

      {/* Right Side */}
      {user && (
        <div className='flex items-center gap-3 md:gap-6'>
          {/* Notification */}
          <button className='relative'>
            <FaBell className='text-lg md:text-xl text-gray-600 hover:text-blue-600 transition' />
          </button>

          {/* User */}
          <div className='flex items-center gap-2'>
            <FaUserCircle className='text-2xl md:text-3xl text-slate-700' />

            {/* Hide name on mobile */}
            <span className='hidden sm:block font-medium text-slate-700'>
              {user.name}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
