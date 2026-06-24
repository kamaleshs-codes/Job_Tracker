import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Add Job", path: "/add-job" },
    { name: "Analytics", path: "/analytics" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside className="w-65 bg-slate-900 text-white min-h-screen p-5">
      <div className="position fixed w-50">
      <h1 className="text-2xl font-bold mb-8">
        Job Tracker
      </h1>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="p-3 rounded-lg hover:bg-slate-700 transition"
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      </div>
    </aside>
  );
};

export default Sidebar;