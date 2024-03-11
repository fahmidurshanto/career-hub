const Banner = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="pl-10">
        <h2 className="text-4xl font-bold mb-5">
          One Step <br /> Closer To Your <br />
          <span className="text-[#7E90FE]">Dream Job</span>
        </h2>
        <p className="text-sm text-gray-400 mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-[#7E90FE] p-2 rounded text-white">
          Get Started
        </button>
      </div>
      <img
        className="w-1/2 object-cover"
        src="https://i.ibb.co/Cz3cPLs/banner-image.jpg"
        alt="banner-image"
      />
    </div>
  );
};

export default Banner;
