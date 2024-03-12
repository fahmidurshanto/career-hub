/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";

const Job = ({ job }) => {
  console.log(job);
  const { companyName, jobCategory, jobLocation, jobType, salary } = job;
  return (
    <div className="border-gray-200 p-5 border">
      <h2 className="text-2xl font-bold">{jobCategory} </h2>
      <p className="text-gray-400">{companyName}</p>
      <div className="my-3">
        <button className="border border-[#7E90FE]  p-2 rounded">
          {jobType}
        </button>
      </div>
      <div className="text-center">
        <p className="text-gray-400  mt-3 flex justify-center items-center">
          <MdLocationOn></MdLocationOn> {jobLocation}, Salary: {salary}
        </p>
      </div>
      <button className="bg-[#7E90FE] text-white p-2 rounded mt-5">
        View Details
      </button>
    </div>
  );
};

export default Job;
