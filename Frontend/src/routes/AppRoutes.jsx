import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Jobs from "../pages/Jobs";
import AddJob from "../pages/AddJob";
import Analytics from "../pages/Analytics";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/add-job' element={<AddJob />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
