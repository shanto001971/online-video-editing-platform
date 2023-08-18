import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";

const DemoMusic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get(`${import.meta.env.VITE_API_URL}/demoMusics`)
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
        <h6 className="text-sm font-semibold">Add Music</h6>
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
            placeholder="Search music"
          />
        </div>
        <div>
          <BsFilter className="-mt-5 text-xl text-gray-600 cursor-pointer" />
        </div>
      </div>
      {data.map((item) => (
        <div className="my-4 group relative">
          <img
            title="Drag and drop on canvas"
            className="h-20 group-hover:scale-105 transition-transform"
            src={item?.img}
            alt=""
          />
          <div className="absolute flex justify-between gap-44 px-3 text-white text-[13px] font-semibold -mt-6">
            <p>{item.title}</p>
            <p>{item?.number}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DemoMusic;
