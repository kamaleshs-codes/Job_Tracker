import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";
import AddJob from "../pages/AddJob";
import Analytics from "../pages/Analytics";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import SearchJobs from "../pages/SearchJobs";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Home />} />
      <Route
        path='/searchjobs'
        element={
          <ProtectedRoute>
            <SearchJobs />
          </ProtectedRoute>
        }
      />
      <Route
        path='/jobs'
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />
      <Route
        path='/add-job'
        element={
          <ProtectedRoute>
            <AddJob />
          </ProtectedRoute>
        }
      />
      <Route
        path='/add-job/:id'
        element={
          <ProtectedRoute>
            <AddJob />
          </ProtectedRoute>
        }
      />
      <Route
        path='/analytics'
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path='/profile'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
