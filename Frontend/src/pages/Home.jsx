import { Link } from "react-router-dom";
import { FaBriefcase, FaChartLine, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (user) {
    return <Navigate to='/dashboard' replace />;
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center px-6 py-8'>
      <div className='max-w-6xl w-full'>
        {/* Hero Section */}

        <div className='text-center text-white'>
          <div className='flex justify-center mb-6'>
            <div className='bg-blue-600 p-5 rounded-full shadow-xl'>
              <FaBriefcase className='text-5xl' />
            </div>
          </div>

          <h1 className='text-6xl font-extrabold mb-4'>Job Tracker</h1>

          <p className='text-2xl text-gray-300 mb-4'>
            Organize every job application in one place.
          </p>

          <p className='max-w-3xl mx-auto text-lg text-gray-400 leading-8'>
            Track applications, monitor interview progress, manage offers,
            upload your resume, and stay organized throughout your entire job
            search.
          </p>

          {/* Buttons */}
          <div className='mt-12 flex flex-col sm:flex-row justify-center gap-6'>
            <Link
              to='/login'
              className='bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-semibold shadow-lg'>
              Login
            </Link>

            <Link
              to='/register'
              className='border border-white hover:bg-white hover:text-slate-900 transition px-10 py-4 rounded-xl text-lg font-semibold'>
              Register
            </Link>
          </div>
        </div>

        {/* Features */}

        <div className='grid md:grid-cols-3 gap-8 mt-24'>
          <div className='bg-white rounded-2xl shadow-xl p-8 text-center'>
            <FaBriefcase className='text-5xl text-blue-600 mx-auto mb-5' />

            <h3 className='text-2xl font-bold mb-3'>Track Applications</h3>

            <p className='text-gray-600'>
              Keep all your job applications organized in one place with status
              updates and notes.
            </p>
          </div>

          <div className='bg-white rounded-2xl shadow-xl p-8 text-center'>
            <FaChartLine className='text-5xl text-green-600 mx-auto mb-5' />

            <h3 className='text-2xl font-bold mb-3'>Analytics</h3>

            <p className='text-gray-600'>
              Visualize your job search with insightful statistics and
              application trends.
            </p>
          </div>

          <div className='bg-white rounded-2xl shadow-xl p-8 text-center'>
            <FaUserCircle className='text-5xl text-purple-600 mx-auto mb-5' />

            <h3 className='text-2xl font-bold mb-3'>Professional Profile</h3>

            <p className='text-gray-600'>
              Manage your personal details and resume from a single dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
onabort;
