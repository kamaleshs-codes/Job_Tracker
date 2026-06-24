import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import jobsData from "../data/jobs";

const AddJob = () => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New Job Added!")
    console.log("Job Submitted:", formData);
    setFormData({
      company: "",
      position: "",
      status: "",
      location: "",
    });
  };

  return (
    <DashboardLayout>
      <div className='max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md'>
        <h1 className='text-3xl font-bold mb-6'>Add New Job</h1>

        <form className='space-y-5' onSubmit={handleSubmit}>
          {/* Company */}
          <div>
            <label className='block mb-2 font-medium'>Company</label>
            <input
              name='company'
              type='text'
              placeholder='Enter company name'
              value={formData.company}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Position */}
          <div>
            <label className='block mb-2 font-medium'>Position</label>
            <input
              name='position'
              value={formData.position}
              onChange={handleChange}
              type='text'
              placeholder='Enter position'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Location */}
          <div>
            <label className='block mb-2 font-medium'>Location</label>
            <input
              name='location'
              value={formData.location}
              onChange={handleChange}
              type='text'
              placeholder='Enter location'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Status */}
          <div>
            <label className='block mb-2 font-medium'>Status</label>
            <select
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              name='status'
              value={formData.status}
              onChange={handleChange}>
              <option value=''>Select Status</option>
              <option value='Pending'>Pending</option>
              <option value='Interview'>Interview</option>
              <option value='Rejected'>Rejected</option>
              <option value='Offer'>Offer</option>
            </select>
          </div>

          {/* Job URL */}
          <div>
            <label className='block mb-2 font-medium'>Job URL</label>
            <input
              type='url'
              placeholder='https://company.com/jobs'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Notes */}
          <div>
            <label className='block mb-2 font-medium'>Notes</label>
            <textarea
              rows='4'
              placeholder='Additional notes...'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>
            Add Job
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddJob;
