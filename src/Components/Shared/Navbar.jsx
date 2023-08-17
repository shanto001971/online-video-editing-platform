import {  useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Logout successfull',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error => console.log(error))
  }
  
  return (
    <div className="bg-gray-200 text-gray-400 font-semibold text-xl px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 sticky top-0 z-10 bg-transparent backdrop-blur-md">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center" title="Home">
          <img src={logo} alt="logo" className=" w-20 rounded-full" />
         
          <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Motion Mingle
          </span>
        </Link>
        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/templates"
              title="Templates"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold" : "default"
              }
            >
             Templates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              title="Explore"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold" : "default"
              }
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/learn"
              title="Learn"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold" : "default"
              }
            >
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              title="Support"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold" : "default"
              }
            >Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              title="Pricing"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold" : "default"
              }
            >
              Pricing
            </NavLink>
          </li>
        </ul>

        <ul className="items-center hidden space-x-8 lg:flex  text-gray-400 font-semibold text-xl">

          {/* Conditional rendering login logout */}

          {
            user ? <>
             <img title={user?.displayName} style={{width:"40px", borderRadius:'50%', marginLeft:'7px'}} src={user.photoURL} alt="" />
            <button onClick={handleLogOut} className="text-[16px] text-gray-500  default">Logout</button>
            
            </> 
            
            : <>
            <li>
            <NavLink
              to="/login"
              title="Log In"
              className={({ isActive }) => (isActive ? "text-[16px] text-black font-bold" : "default text-[16px]")}
            >
              Login
            </NavLink>
          </li>

            { <li>
            <NavLink
              to="/register"
              title="Sign Up"
              className={({ isActive }) => (isActive ? "text-[16px] text-gray-400  font-bold" : "default text-[16px]")}
            >
              Sign Up
            </NavLink>
          </li> }

            </>
          }


        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <AiOutlineMenu className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <NavLink
                      to="/"
                      className="inline-flex flex-col items-start "
                      title="Home"
                    >
                      <img
                        src={logo}
                        alt="logo"
                        className="w-14  rounded-full"
                      />
                      
                      <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Motion Mingle
          </span>
                    </NavLink>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <RxCross2 className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        to="/templates"
                        title="Templates"
                        className={({ isActive }) =>
                          isActive
                            ? "text-xl text-black font-bold"
                            : "default"
                        }
                      >
                        Templates
                      </Link>
                    </li>

                    <li>
                      <NavLink
                        to="/explore"
                        title="Explore"
                        className={({ isActive }) =>
                          isActive
                            ? "text-xl text-black font-bold"
                            : "default"
                        }
                      >
                        Explore
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/learn"
                        title="Learn"
                        className={({ isActive }) =>
                          isActive
                            ? "text-xl text-black font-bold"
                            : "default"
                        }
                      >
                        Learn
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/support"
                        title="Support"
                        className={({ isActive }) =>
                          isActive
                            ? "text-xl text-black font-bold"
                            : "default"
                        }
                      >
                        Support
                      </NavLink>
                    </li>
                    <li>
            <NavLink
              to="/register"
              title="Sign Up"
              className={({ isActive }) => (isActive ? "text-xl text-black font-bold" : "default")}
            >
              Signup
            </NavLink>
          </li>
          
          {/*conditional rendering login logout */}

        {
            user ? <>
             <img title={user?.displayName} style={{width:"40px", borderRadius:'50%', marginLeft:'7px'}} src={user.photoURL} alt="" />
            <button onClick={handleLogOut} className="text-[16px] text-gray-500  default">Logout</button>
            
            </> 
            
            : <>
            <li>
            <NavLink
              to="/login"
              title="Log In"
              className={({ isActive }) => (isActive ? "text-[16px] text-black font-bold" : "default text-[16px]")}
            >
              Login
            </NavLink>
          </li>

            { <li>
            <NavLink
              to="/register"
              title="Sign Up"
              className={({ isActive }) => (isActive ? "text-[16px] text-gray-400  font-bold" : "default text-[16px]")}
            >
              Sign Up
            </NavLink>
          </li> }

            </>
          }

                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
