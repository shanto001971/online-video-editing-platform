import axios from "axios";
import React, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { CiSearch } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const DemoVideo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get(`${import.meta.env.VITE_API_URL}/demoVideos`)
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
        <h6 className="text-sm font-semibold">Add Video</h6>
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
            placeholder="Search"
          />
        </div>
        <div>
          <BsFilter className="-mt-5 text-xl text-gray-600 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 relative">
        {data.map((item) => (
          <div>
            <HoverVideoPlayer
              videoSrc={item.video_src}
              title="Drag and drop on canvas"
              videoStyle={{
                width: "100%",
                height: "100%",
                borderRadius: "2px",
              }}
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
            {/* TODO */}
            {/* <div className="top-12  flex items-center justify-between gap-20 text-white z-10">
              <AiOutlinePlus title="Drag and drop on canvas" className="absolute ml-[110px] bottom-1 z-10 hidden text-white  group-hover:block text-xl"/>
          </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default DemoVideo;
