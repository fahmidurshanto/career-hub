import { MdLocationOn } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetail = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  console.log(job);
  const {
    companyName,
    jobCategory,
    jobDescription,
    jobLocation,
    jobRequirements,
    jobResponsibility,
    jobType,
    salary,
    experience,
  } = job;

  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-center">
        <h2 className="text-5xl font-semibold py-[20%] w-full">Job Detail</h2>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center p-10">
        <div className=" p-5  text-start">
          <h2 className="text-2xl font-bold">{jobCategory} </h2>
          <p className="text-gray-400">{companyName}</p>
          <div className="my-3">
            <button className="border border-[#7E90FE]  p-2 rounded text-[#7E90FE]">
              {jobType}
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-400  mt-3 flex justify-start">
              <MdLocationOn></MdLocationOn> {jobLocation}
            </p>
            <p className="text-gray-500 text-start mt-3">
              <strong>Salary: </strong>
              {salary}
            </p>
          </div>
        </div>
        <div className="p-5 lg:w-3/4">
          <p className="mb-5">
            <strong>Job Description: </strong>
            <span className="text-gray-500">{jobDescription}</span>
          </p>
          <p className="mb-5">
            <strong>Job Responsibility: </strong>
            <span className="text-gray-500">{jobResponsibility}</span>
          </p>
          <p className="mb-5">
            <strong>Educational Requirements: </strong>
            <span className="text-gray-500">{jobRequirements}</span>
          </p>
          <p className="mb-5">
            <strong>Experience: </strong>
            <span className="text-gray-500">{experience}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
