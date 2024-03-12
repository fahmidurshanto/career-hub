import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <JobCategory categories={categories}></JobCategory>
      <FeatureJobs></FeatureJobs>
    </div>
  );
};

export default Home;
