import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight, BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const DemoTemplate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get(`${import.meta.env.VITE_API_URL}/demoTemplates`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h6 className="text-sm font-semibold">Add Templates</h6>
        <div className="text-pink-700 flex items-center gap-[2px] bg-pink-100 px-2 rounded-sm cursor-pointer">
          <FaCrown className="text-xs" />
          <p className="text-[10px] font-semibold">Remove watermark</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div class="relative w-full">
          <CiSearch className="absolute left-[10px] top-[6px] text-base text-gray-500" />
          <input
            type="text"
            class="border bg-gray-100 rounded-3xl pl-7 h-[26px] w-full text-[13px]  focus:outline-none font-medium focus:border-blue-300"
            placeholder="Search templates"
          />
        </div>
        <div>
          <BsFilter className="-mt-5 text-xl text-gray-600 cursor-pointer" />
        </div>
      </div>
      <div className="flex text-[11px] text-gray-500 font-semibold gap-2 px-1 overflow-x-scroll custom-scrollbar cursor-pointer">
        <span className="hover:bg-gray-200 rounded-sm px-1">Intro</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Testimonials</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Offer</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Sideshow</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Ads</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Presentation</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Invites</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Branding</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Listicles</span>
      </div>
      <div className="flex justify-center items-center gap-2 h-8 bg-gray-100 border-[1px] mb-3 cursor-pointer">
        <AiOutlinePlus />
        <p className="text-xs font-medium">Add blank scene</p>
      </div>
      {data.map((item) => (
        <div className="group" key={item._id}>
          <img
            className="group-hover:scale-105 transition-transform"
            src={item.img}
            alt=""
          />
          <div className="flex justify-between items-center px-1">
            <p className="text-xs font-semibold text-gray-600 mt-1 mb-4">
              {item.title}
            </p>
            <div className="flex items-center gap-1">
              <p className="text-xs font-semibold hidden group-hover:block">
                Use
              </p>
              <BsArrowUpRight className="hidden group-hover:block" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DemoTemplate;
