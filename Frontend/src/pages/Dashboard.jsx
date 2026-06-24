import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import jobs from "../data/jobs";

const Dashboard = () => {
  const totalJobs = jobs.length;

  const pendingJobs = jobs.filter((job) => job.status === "Pending").length;

  const interviewJobs = jobs.filter((job) => job.status === "Interview").length;

  const rejectedJobs = jobs.filter((job) => job.status === "Rejected").length;

  const offerJobs = jobs.filter((job) => job.status === "Offer").length;

  return (
    <DashboardLayout>
      <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 hover:shadow-xl transition'>
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
