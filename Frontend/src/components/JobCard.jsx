import { Link } from "react-router-dom";

const JobCard = ({ company, position, status, location, job, onDelete }) => {

  const getStatusColor = () => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Interview":
        return "bg-blue-100 text-blue-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      case "Offer":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300'>
      <h2 className='text-xl font-bold mb-2'>{company}</h2>

      <p className='text-gray-700 font-medium'>{position}</p>

      <p className='text-gray-500 mt-2'>📍 {location}</p>

      <span
        className={`inline-block mt-4 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor()}`}>
        {status}
      </span>

      <div className='flex gap-3 mt-4'>
        <Link to={`/add-job/${job._id}`}>
        <button className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600'>
          Edit
        </button>
        </Link>
        <button
          className='bg-red-500 text-white px-4 py-2 rounded hover:be-red-600'
          onClick={() => onDelete(job._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
