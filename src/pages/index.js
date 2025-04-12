import SearchBar from "../component/search-bar";
import JobList from "../component/job-list";
import JobDetail from "../component/job-detail";
import React, { useState } from "react";

export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-gray-300 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Search bar always on top */}
        <SearchBar />

        {/* Job list and job detail side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {/* Job List */}
          <div className="md:col-span-2 bg-gray-200 p-6 rounded-3xl shadow">
            <JobList onSelect={setSelectedJob} />
          </div>

          {/* Job Detail */}
          <div>
            {selectedJob && <JobDetail job={selectedJob} />}
          </div>
        </div>
      </div>
    </div>
  );
}
