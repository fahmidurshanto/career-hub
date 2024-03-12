/* eslint-disable react/prop-types */
import Category from "../Category/Category";

const JobCategory = ({ categories }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold pt-5">Job Category List</h2>
      <p
        className="text-gray-400 
       pb-5 "
      >
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div>
        <div>
          <h1>Categories: {categories.length}</h1>
          <div className="grid lg:grid-cols-3 gap-5 ">
            {categories.map((category) => (
              <Category category={category} key={category.id}></Category>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
