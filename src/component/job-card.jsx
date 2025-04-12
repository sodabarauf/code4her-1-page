import { HiOutlineBriefcase } from "react-icons/hi";
const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        <img src={job.logo} alt={job.company} className="w-10 h-10" />
        <div>
          <h3 className="font-semibold text-sm">{job.title}</h3>
          <p className="text-xs text-gray-500">{job.company}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Salary + Time */}
      <div className="flex justify-between items-center text-sm">
        <span className="flex items-center gap-1">
          <HiOutlineBriefcase className="text-pink-400" />
          {job.salary}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
