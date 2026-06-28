import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";
import StatusPieChart from "../components/StatusPieChart";
import { FaExchangeAlt } from "react-icons/fa";

const Analytics = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs()
  },[]);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  // Analytics Data
  const statusData = [
    {
      name: "Pending",
      value: jobs.filter((job) => job.status === "Pending").length,
    },
    {
      name: "Interview",
      value: jobs.filter((job) => job.status === "Interview").length,
    },
    {
      name: "Offer",
      value: jobs.filter((job) => job.status === "Offer").length,
    },
    {
      name: "Rejected",
      value: jobs.filter((job) => job.status === "Rejected").length,
    },
  ];




  return (
    <DashboardLayout>
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800'>
            Analytics Dashboard
          </h1>

          <p className='text-gray-500 mt-2'>
            Visualize your job application progress.
          </p>
        </div>

        <div className='bg-white rounded-xl shadow-md p-6'>
          <StatusPieChart data={statusData} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
