import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

const AddJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "",
    location: "",
    jobUrl: "",
    notes: "",
  });

  useEffect(() => {
    if (id) {
      fetchJob();
    }
  }, [id]);

  const fetchJob = async () => {
    try {
      const res = await api.get(`/jobs/${id}`);

      setFormData({
        company: res.data.data.company || "",
        position: res.data.data.position || "",
        status: res.data.data.status || "",
        location: res.data.data.location || "",
        jobUrl: res.data.data.jobUrl || "",
        notes: res.data.data.notes || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      alert("Failed to save Job");
    }
  };

  return (
    <AppLayout>
      <div className='max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md'>
        <h1 className='text-3xl font-bold mb-6'>
          {id ? "Edit Job" : "Add New Job"}
        </h1>

        <form className='space-y-5' onSubmit={handleSubmit}>
          {/* Company */}
          <div>
            <label className='block mb-2 font-medium'>Company</label>

            <input
              type='text'
              name='company'
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
              type='text'
              name='position'
              placeholder='Enter position'
              value={formData.position}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Location */}
          <div>
            <label className='block mb-2 font-medium'>Location</label>

            <input
              type='text'
              name='location'
              placeholder='Enter location'
              value={formData.location}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Status */}
          <div>
            <label className='block mb-2 font-medium'>Status</label>

            <select
              name='status'
              value={formData.status}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>
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
              name='jobUrl'
              placeholder='https://company.com/jobs'
              value={formData.jobUrl}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Notes */}
          <div>
            <label className='block mb-2 font-medium'>Notes</label>

            <textarea
              rows='4'
              name='notes'
              value={formData.notes}
              onChange={handleChange}
              placeholder='Additional notes...'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>
            {id ? "Update Job" : "Add Job"}
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default AddJob;
