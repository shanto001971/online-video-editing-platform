import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function UserModal({ user }) {
 

  return (
    <div >
      
    <div className="dropdown dropdown-hover ">
  <label tabIndex={0} className="md:flex items-center gap-1 m-1">
  {user && (
        <li
          className="md:flex items-center"
        >
          <div
            className="btn btn-circle text-white text-base font-bold bg-violet-500 hover:text-white hover:bg-violet-500"
          >
            {user?.displayName.slice(0, 1)}
          </div>
          <BsChevronDown className="hidden md:block text-gray-800 h-3 font-extrabold" />
        </li>
      )}</label>
  <div tabIndex={0} className="dropdown-content z-[1] text-slate-300 menu  p-3 md:p-5 shadow-lg bg-black rounded-box  lg:w-32 ">
  <div tabIndex={0} className="dropdown-content z-[1] text-slate-300 menu p-3 lg:px-9 md:p-5 shadow-lg bg-black rounded-box w-auto mr-48">
  <p className="py-2">Hi,{user?.displayName.split(' ')[0]}</p>

 
            <NavLink
              to="/profile"
              title="Profile"
              className="hover:text-xl  "
            >
             Profile
            </NavLink>
         
            <NavLink
              to="/dashboard"
              title="Dashboard"
              className="hover:text-xl  "

            >
             Dashboard
            </NavLink>
         
            <NavLink
              to="/project"
              title="Project"
              className="hover:text-xl  "
            
            >
            My Project
            </NavLink>
         
          <NavLink
              to="/presets"
              title="Presets"
              className="hover:text-xl  "

            >
              Brand Presets
            </NavLink>
       
          <NavLink
              to="/teamSettings"
              title="Team Settings" 
              className="hover:text-xl  "

            >
               Team Settings
            </NavLink>
        
          <NavLink
              to="/purchased"
              title="Purchase"
              className="hover:text-xl  "

            >
               Purchased
            </NavLink>
         
          <NavLink
              to="/FaQ"
              title="FaQ"
              className="hover:text-xl  "

            >
               FaQ
            </NavLink>
          
            <NavLink
              to="/logout"
              title="Log Out"
              className="hover:text-xl py-4 "

            >
              Log Out
            </NavLink>
  </div>
</div>
    </div>
  );
}

export default UserModal;
