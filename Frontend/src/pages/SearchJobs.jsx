import { useAuth } from "../context/AuthContext";
import AppLayout from "../layout/AppLayout";

const dummyJobs = [
  {
    company: "Google",
    position: "Frontend Developer",
    location: "Bangalore",
    type: "Full Time",
    salary: "₹18 - ₹25 LPA",
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    location: "Hyderabad",
    type: "Hybrid",
    salary: "₹20 - ₹30 LPA",
  },
  {
    company: "Amazon",
    position: "MERN Stack Developer",
    location: "Chennai",
    type: "Remote",
    salary: "₹10 - ₹15 LPA",
  },
];

const SearchJobs = () => {
  const { user } = useAuth();

  return (
    <AppLayout>
      {/* Hero Section */}
      <div className='mb-10'>
        <h1 className='text-3xl font-bold text-slate-800'>
          Welcome back, {user?.name} 👋
        </h1>

        <p className='text-gray-600 mt-2'>
          Discover your next opportunity from thousands of jobs.
        </p>
      </div>

      {/* Search Section */}

      <div>
        <h2 className='text-2xl font-semibold mb-6'>Search</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white rounded-xl shadow-md p-6 mb-10'>
          <input
            type='text'
            placeholder='Job title or keyword'
            className='border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500'
          />

          <input
            type='text'
            placeholder='Location'
            className='border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500'
          />

          <select className='border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500'>
            <option>All Job Types</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Internship</option>
          </select>

          <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition'>
            Search
          </button>
        </div>
      </div>

      {/* Featured Jobs */}
      <div>
        <h2 className='text-2xl font-semibold mb-5'>Featured Jobs</h2>

        <div className='grid gap-5'>
          {dummyJobs.map((job, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition'>
              <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5'>
                <div>
                  <h3 className='text-xl font-bold text-slate-800'>
                    {job.position}
                  </h3>

                  <p className='text-gray-600 mt-1'>{job.company}</p>

                  <div className='flex flex-wrap gap-3 mt-4 text-sm text-gray-500'>
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                    <span>💰 {job.salary}</span>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <button className='border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition'>
                    Save
                  </button>

                  <button className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default SearchJobs;
