import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <FaBell className="text-xl cursor-pointer" />

        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl" />
          <span>Kamalesh</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;