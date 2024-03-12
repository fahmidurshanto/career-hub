const Category = ({ category }) => {
  return (
    <div className="text-gray-400 p-5 bg-pink-50 text-center rounded">
      <img
        className="container mx-auto p-2"
        src={category.realJobIconLink}
        alt=""
      />
      <h2 className="text-2xl text-black p-2">{category.jobCategoryTitle}</h2>
      <p className="p-2">{category.availableJobs} available jobs</p>
    </div>
  );
};

export default Category;
