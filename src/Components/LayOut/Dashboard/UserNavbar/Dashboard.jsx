import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoCopy from "../../../../assets/logoCopy.png";
import { FiCornerUpLeft, FiCornerUpRight } from "react-icons/fi";
import UserModal from "./UserModal";
import CreateModal from "./CreateModal";
import { AuthContext } from "../../../../providers/AuthProvider";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" text-gray-500 font-medium  md:py-1  sm:max-w-xs md:max-w-screen-md lg:max-w-screen-xl  ">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" title="Home">
            <img src={logoCopy} alt="logo" className=" w-16 rounded-full" />
          </Link>
          Projects
        </div>
        <ul className="items-center hidden space-x-4 lg:flex">

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }
            >Editor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collaborate"
              className={({ isActive }) =>
                isActive ? " text-black font-bold" : "default"
              }
            >
              Collaborate
            </NavLink>
          </li>
        </ul>
        <ul className="items-center  lg:space-x-3 flex  text-gray-400 font-semibold text-xl">

          <FiCornerUpLeft className="text-gray-500" />
          <FiCornerUpRight className="text-gray-500" />
          <CreateModal />
          <UserModal user={user} />
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;
