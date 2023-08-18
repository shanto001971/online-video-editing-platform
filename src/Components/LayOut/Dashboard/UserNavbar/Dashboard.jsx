import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import LearnModal from "./LearnModal";
import CreateModal from "./CreateModal";
import UserModal from "./UserModal";
import { AuthContext } from "../../../../providers/AuthProvider";
const Dashboard = () => {
  const {user}= useContext(AuthContext);
  return (
    <div className=" text-gray-500 font-medium  md:py-5  sm:max-w-xs md:max-w-screen-md lg:max-w-screen-xl  ">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" title="Home">
            <img src={logo} alt="logo" className=" w-16 rounded-full" />
          </Link>
  <LearnModal />
        </div>
       
        <ul className="items-center  lg:space-x-8 flex  text-gray-400 font-semibold text-xl">
          <li>
      <CreateModal/>
          </li>
         <UserModal user={user}/>
        </ul>
       
      </div>
    </div>
  );
};

export default Dashboard;
