import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 text-gray-500 font-medium px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 sticky top-0 z-10 bg-transparent backdrop-blur-md">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center" title="Home">
          <img src={logo} alt="logo" className=" w-20 rounded-full" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
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
              <div className="flex gap-1 text-base text-gray-500 font-medium">
                <span className=" m-1 text-base text-gray-500 font-medium">
                  Templates
                </span>
                <BsChevronDown className=" h-6 pt-2 text-gray-600" />
              </div>
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
              <span className="flex gap-1 text-base text-gray-500 font-medium">
                <span className=" m-1 text-base text-gray-500 font-medium">
                  Explore
                </span>
                <BsChevronDown className=" h-6 pt-2 text-gray-600" />
              </span>
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
              <span className="flex gap-1 text-base text-gray-500 font-medium">
                <span className=" m-1 text-base text-gray-500 font-medium">
                  Learn
                </span>
                <BsChevronDown className=" h-6 pt-2 text-gray-600" />
              </span>
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
              <span className="flex gap-1 text-base text-gray-500 font-medium">
                <span className=" m-1 text-base text-gray-500 font-medium">
                  Support
                </span>
                <BsChevronDown className=" h-6 pt-2 text-gray-600" />
              </span>
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

        <ul className="items-center hidden space-x-8 lg:flex text-base text-gray-500 font-medium">
          <li>
            <NavLink
              to="/register"
              title="Sign Up"
              className={({ isActive }) => (isActive ? "text-xl text-black font-bold" : "default")}
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              title="Log In"
              className={({ isActive }) => (isActive ? "text-xl text-black font-bold" : "default")}
            >
              Login
            </NavLink>
          </li>
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
                      <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase">
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
                        <span className="flex text-base text-gray-500 font-medium">
                          <span className=" m-1 text-base text-gray-500 font-medium">
                            Templates
                          </span>
                          <BsChevronDown className=" h-5 pt-2 text-gray-600" />
                        </span>
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
                        <span className="flex  text-base text-gray-500 font-medium">
                          <span className=" m-1 text-base text-gray-500 font-medium">
                            Explore
                          </span>
                          <BsChevronDown className=" h-5 pt-2 text-gray-600" />
                        </span>
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
                        <span className="flex  text-base text-gray-500 font-medium">
                          <span className=" m-1 text-base text-gray-500 font-medium">
                            Learn
                          </span>
                          <BsChevronDown className=" h-5 pt-2 text-gray-600" />
                        </span>
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
                        <span className="flex text-base text-gray-500 font-medium">
                          <span className=" m-1 text-base text-gray-500 font-medium">
                            Support
                          </span>
                          <BsChevronDown className=" h-5 pt-2 text-gray-600" />
                        </span>
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
          <li>
            <NavLink
              to="/login"
              title="Log In"
              className={({ isActive }) => (isActive ? "active" : "default")}
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

export default Navbar;
