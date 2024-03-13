import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
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
      <div className="my-12">
        <div className="grid lg:grid-cols-2 gap-6 p-5">
          {featuredJobs.slice(0, dataLength).map((job, idx) => (
            <Job key={idx} job={job}></Job>
          ))}
        </div>
        <button
          onClick={() => setDataLength(featuredJobs.length)}
          className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white p-2 rounded my-5 cursor-pointer ${
            dataLength === featuredJobs.length ? "hidden" : ""
          }`}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
