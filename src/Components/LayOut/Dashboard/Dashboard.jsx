import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 text-gray-500 font-medium  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  sticky top-0 z-10 bg-transparent backdrop-blur-md">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" title="Home">
            <img src={logo} alt="logo" className=" w-16 rounded-full" />
          </Link>

          <span className="items-center ml-4 space-x-8 lg:flex  text-gray-400 font-normal text-base hover:text-black hover:font-semibold">
            Learn{" "}
            <BsChevronDown className="ml-2 w-2 text-slate-500 font-extrabold" />
          </span>
        </div>

        <ul className="items-center hidden space-x-8 lg:flex  text-gray-400 font-semibold text-xl">
          <li>
            <NavLink
              to="/register"
              title="Sign Up"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold" : "default"
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              title="Log In"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold" : "default"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
        {/* Mobile Dashboard Section */}
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
                          isActive ? "text-xl text-black font-bold" : "default"
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
                      >
                        Support
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/register"
                        title="Sign Up"
                        className={({ isActive }) =>
                          isActive ? "text-xl text-black font-bold" : "default"
                        }
                      >
                        Signup
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        title="Log In"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Login
                      </NavLink>
                    </li>
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

export default Dashboard;
