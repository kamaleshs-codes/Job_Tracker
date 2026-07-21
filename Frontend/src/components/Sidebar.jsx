import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaChartPie,
  FaBriefcase,
  FaPlusCircle,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { logout } = useAuth();

  const links = [
    {
      name: "Search Jobs",
      path: "/searchjobs",
      icon: <FaChartPie />,
    },
    {
      name: "Jobs",
      path: "/jobs",
      icon: <FaBriefcase />,
    },
    {
      name: "Add Job",
      path: "/add-job",
      icon: <FaPlusCircle />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartBar />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <aside
      className={`
      fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white
      flex flex-col shadow-lg z-50
      transform transition-transform duration-300
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0
      `}>
      {/* Logo */}
      <div className='px-6 py-8 border-b border-slate-700'>
        <h1 className='text-3xl font-bold text-blue-400'>Job Tracker</h1>
      </div>

      {/* Navigation */}
      <nav className='flex-1 px-4 py-6 space-y-2'>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/dashboard"}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`
            }>
            <span className='text-lg'>{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className='p-4 border-t border-slate-700'>
        <button
          onClick={logout}
          className='w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 rounded-lg py-3 transition'>
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
