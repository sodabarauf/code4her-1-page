import jobs from "@/data/jobs";
import JobCard from "./job-card";

const JobList = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Search Results</h2>
        <p className="text-sm text-gray-500">1.100 results found</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
