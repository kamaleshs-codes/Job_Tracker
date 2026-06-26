import { useState,useEffect} from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import JobCard from "../components/JobCard";

const AddJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (id) {
      fetchJob();
    }
  }, [id]);

  const fetchJob = async () => {
    try {
      const res = await api.get(`/jobs/${id}`);
      setFormData({
        company: res.data.data.company,
        position: res.data.data.position,
        status: res.data.data.status,
        location: res.data.data.location,
        notes: res.data.data.notes,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/jobs/${id}`, formData);
        alert("Job Updated Successfully");
      } else {
        await api.post("/jobs", formData);
        alert("Job Added Successfully");
      }
      navigate("/jobs");
    } catch (error) {
      console.log(error);
      alert("Failed to add Job");
    }
  };

  return (
    <DashboardLayout>
      <div className='max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md'>
        <h1 className='text-3xl font-bold mb-6'>{id ? "Edit Job": "Add New Job"}</h1>

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
            {id ? "Update": "Add Job"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddJob;
