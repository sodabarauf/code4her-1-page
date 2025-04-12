import React from "react";

const JobDetail = ({ job }) => {
  if (!job) return null;

  return (
    <div className="bg-white rounded-3xl p-12 shadow-md">
      <img src={job.logo} alt={job.company} className="h-10 mb-4" />
      <h2 className="text-lg font-semibold">{job.title}</h2>
      <p className="text-gray-500">{job.company}</p>

      <div className="mt-2 text-pink-500 text-sm">{job.applicants}</div>

      <hr className="my-4" />

      <h3 className="font-semibold mb-2">Description</h3>
      <p className="text-sm text-gray-700">{job.description}</p>

      <hr className="my-4" />

      <h3 className="font-semibold mb-2">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag, idx) => (
          <span key={idx} className="bg-gray-200 px-2 py-1 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>

      <hr className="my-4" />

      <h3 className="font-semibold mb-2">Based salary</h3>
      <p className="text-gray-600">{job.salary}</p>
      

      <button className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 rounded-3xl mt-6">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetail;
