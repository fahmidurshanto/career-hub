/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  console.log(displayJobs);

  const handleJobsFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter((job) => job.jobType === "Remote");
      setDisplayJobs(remoteJobs);
    } else if (filter === "Full-time") {
      const fullTimeJobs = appliedJobs.filter(
        (job) => job.jobType === "Full-time"
      );
      setDisplayJobs(fullTimeJobs);
    } else if (filter === "Part-time") {
      const partTimeJobs = appliedJobs.filter(
        (job) => job.jobType === "Part-time"
      );
      setDisplayJobs(partTimeJobs);
    } else if (filter === "Contract") {
      const contractJobs = appliedJobs.filter(
        (job) => job.jobType === "Contract"
      );
      setDisplayJobs(contractJobs);
    } else if (filter === "Commission-based") {
      const commissionBasedJobs = appliedJobs.filter(
        (job) => job.jobType === "Commission-based"
      );
      setDisplayJobs(commissionBasedJobs);
    } else if (filter === "Freelance") {
      const freelanceJobs = appliedJobs.filter(
        (job) => job.jobType === "Freelance"
      );
      setDisplayJobs(freelanceJobs);
    }
  };
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      // console.log(
      //   "jobs: ",
      //   jobs,
      //   "jobsApplied: ",
      //   jobsApplied,
      //   "stored jobs",
      //   storedJobIds
      // );
    }
  }, [jobs]);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl">Jobs I Applied: {appliedJobs.length}</h2>
      {/* Dropdown option */}
      <details className="dropdown cursor-pointer">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li
            className="border p-1 m-1 text-green-600"
            onClick={() => handleJobsFilter("All")}
          >
            <a>All</a>
          </li>
          <li
            className="border p-1 m-1 text-green-600"
            onClick={() => handleJobsFilter("Full-time")}
          >
            <a>Full-time</a>
          </li>
          <li
            className="border p-1 m-1 text-green-600"
            onClick={() => handleJobsFilter("Remote")}
          >
            <a>Remote</a>
          </li>
          <li
            className="border p-1 m-1 text-green-600"
            onClick={() => handleJobsFilter("Part-time")}
          >
            <a>Part-time</a>
          </li>
          <li
            className="border p-1 m-1 text-green-600"
            onClick={() => handleJobsFilter("Contract")}
          >
            <a>Contract</a>
          </li>
          <li
            className="border p-1 m-1 text-green-600"
            onClick={() => handleJobsFilter("Commission-based")}
          >
            <a>Commission-based</a>
          </li>
          <li
            className="border p-1 m-1 text-green-600"
            onClick={() => handleJobsFilter("Freelance")}
          >
            <a>Freelance</a>
          </li>
        </ul>
      </details>
      {/* Dropdown option end */}
      <div className="grid grid-cols-3 gap-10 mt-16 ">
        {displayJobs.map((job) => (
          <div
            job={job}
            key={job.id}
            className="text-start my-10 p-10 bg-black text-white  rounded shadow-xl space-y-4"
          >
            <h3>Job ID: {job.id}</h3>
            <h4>
              <strong>Company Name:</strong> {job.companyName}
            </h4>
            <p>
              <strong>Company Name:</strong> {job.jobCategory}
            </p>
            <p>
              <strong>Location:</strong> {job.jobLocation}
            </p>
            <p>
              <strong>Job Description: </strong> {job.jobDescription}
            </p>
            <p>
              <strong>Job Responsibility: </strong>
              {job.jobResponsibility}
            </p>
            <button className="btn btn-outline text-green-500 p-2">
              {job.jobType}
            </button>
            <p className="text-red-400">
              <strong>Salary: </strong>
              {job.salary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
