import { BsChevronDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function LearnModal() {

  return (
    <div >
  

<div className="dropdown dropdown-hover">
  <label tabIndex={0} className="md:flex items-center gap-1 m-1">
        Learn
        <BsChevronDown className="hidden md:block text-gray-400" /></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 md:p-5 shadow-lg bg-base-100 rounded-box w-auto">
 
  <NavLink
              to="/templates"
              title="Temp"
              className={({ isActive }) =>
                isActive ? 'text-xl text-black font-bold' : 'default'
              }
            >
              Templates
            </NavLink>
           
            <NavLink
              to="/templates"
              title="Temp"
              className={({ isActive }) =>
                isActive ? 'text-xl text-black font-bold' : 'default'
              }
            >
              Templates
            </NavLink>
            <NavLink
              to="/templates"
              title="Temp"
              className={({ isActive }) =>
                isActive ? 'text-xl text-black font-bold' : 'default'
              }
            >
              Templates
            </NavLink>
  </ul>
</div>
    </div>
  );
}

export default LearnModal;
