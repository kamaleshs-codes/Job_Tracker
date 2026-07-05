import DashboardLayout from "../layout/DashboardLayout";
import StatCard from "../components/StatCard";
import api from "../api/axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalJobs = jobs.length;

  const pendingJobs = jobs.filter((job) => job.status === "Pending").length;

  const interviewJobs = jobs.filter((job) => job.status === "Interview").length;

  const rejectedJobs = jobs.filter((job) => job.status === "Rejected").length;

  const offerJobs = jobs.filter((job) => job.status === "Offer").length;

  console.log(user);

  return (
    <DashboardLayout>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-slate-800'>
          Welcome back, {user.name} 👋
        </h1>

        <p className='text-gray-600 mt-2'>
          Here's an overview of your job search progress.
        </p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-5 hover:shadow-xl transition'>
        <StatCard title='Total Jobs' count={totalJobs} />
        <StatCard title='Pending' count={pendingJobs} />
        <StatCard title='Interview' count={interviewJobs} />
        <StatCard title='Rejected' count={rejectedJobs} />
        <StatCard title='Offers' count={offerJobs} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
