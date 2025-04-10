import React from "react";
import jobs from "../data/jobs";

const JobList = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => onSelect(job)}
          className="bg-white p-4 rounded-3xl cursor-pointer shadow"
        >
          <img src={job.logo} alt={job.company} className="h-8 mb-2" />
          <h2 className="font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.company}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 px-2 py-1 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-pink-600 font-medium mt-2">{job.salary}</div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
