import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import JobCard from "../components/JobCard";
import jobsData from "../data/jobs";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div>
        <h1 className='text-3xl font-bold mb-6'>My Applications</h1>

        {/* Search + Filter */}
        <div className='flex flex-col md:flex-row gap-4 mb-6'>
          <input
            type='text'
            placeholder='Search company or position...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border border-gray-300 rounded-lg px-4 py-2 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value='All'>All</option>
            <option value='Pending'>Pending</option>
            <option value='Interview'>Interview</option>
            <option value='Rejected'>Rejected</option>
            <option value='Offer'>Offer</option>
          </select>
        </div>

        {/* Jobs */}
        {filteredJobs.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                company={job.company}
                position={job.position}
                status={job.status}
                location={job.location}
              />
            ))}
          </div>
        ) : (
          <div className='bg-white p-8 rounded-xl shadow text-center'>
            <h2 className='text-xl font-semibold text-gray-600'>
              No jobs found
            </h2>
            <p className='text-gray-500 mt-2'>
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Jobs;
