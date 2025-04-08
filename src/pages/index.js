import SearchBar from "../component/search-bar";
import JobList from "../component/job-list";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-300 px-4 py-6">
      <SearchBar />
      <div className="max-w-3xl mx-auto mt-5">
        <JobList />
      </div>
    </div>
  );
}
