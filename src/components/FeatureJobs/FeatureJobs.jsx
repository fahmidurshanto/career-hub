import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  return (
    <div className="text-center my-12">
      <h1 className="text-4xl font-bold">Featured Jobs</h1>
      <p className="text-gray-400">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div>
        <h2>Featured Jobs: {featuredJobs.length}</h2>
        <div className="grid lg:grid-cols-3 gap-6 p-5">
          {featuredJobs.map((job, idx) => (
            <Job key={idx} job={job}></Job>
          ))}
        </div>
        <button className="bg-[#7E90FE] text-white p-2 rounded my-5">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
