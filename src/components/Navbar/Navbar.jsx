const Navbar = () => {
  return (
    <div className="sm:flex-cols flex justify-around items-center p-5 ">
      <h3 className="text-2 cursor-pointer">Career Hub</h3>

      <div className="flex justify-center items-center hidden lg:block">
        <button className="mr-3 cursor-pointer">Statistics</button>
        <button className="mr-3 cursor-pointer">Applied Jobs</button>
        <button className="mr-3 cursor-pointer">Blog</button>
      </div>

      <button className="bg-[#7E90FE] text-white p-2 rounded">
        Start Applying
      </button>
    </div>
  );
};

export default Navbar;
