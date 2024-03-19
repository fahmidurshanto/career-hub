import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sm:flex-cols flex justify-around items-center p-5 ">
      <Link to={`/`}>
        {" "}
        <h3 className="text-2 cursor-pointer">Career Hub</h3>
      </Link>

      <ul className="hidden md:flex justify-center items-center   manrope-font">
        <NavLink to="/">
          <li className="mr-3 cursor-pointer">Home</li>
        </NavLink>
        <NavLink to="/statistics">
          <li className="mr-3 cursor-pointer">Statistics</li>
        </NavLink>
        <NavLink to="/applied-jobs">
          <li className="mr-3 cursor-pointer">Applied Jobs</li>
        </NavLink>
        <NavLink to="/blogs">
          <li className="mr-3 cursor-pointer">Blog</li>
        </NavLink>
      </ul>

      <button className="bg-[#7E90FE] text-white p-2 rounded cursor-pointer">
        Start Applying
      </button>
    </div>
  );
};

export default Navbar;
