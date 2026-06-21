import DashboardLayout from "../layouts/DashboardLayout";
import JobCard from "../components/JobCard";
import jobs from "../data/jobs";

const Jobs = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">
          My Applications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              company={job.company}
              position={job.position}
              status={job.status}
              location={job.location}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Jobs;