import { SlCloudUpload } from "react-icons/sl";
import { PiVideoLight } from "react-icons/pi";
import { LiaImageSolid } from "react-icons/lia";
import { PiMusicNoteLight } from "react-icons/pi";
import { RxText } from "react-icons/rx";
import { TbMoodEdit } from "react-icons/tb";
import { SiSemanticrelease } from "react-icons/si";
import { GoProjectTemplate } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

const VideoEditPageSidebar = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center border-r-[1px] w-[50px] sm:w-[60px] h-auto py-2 z-10 shadow-md">
      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <SlCloudUpload className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">Uploads</span>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <PiVideoLight className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">Videos</span>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <LiaImageSolid className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">Images</span>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <PiMusicNoteLight className="text-[20px] sm:text-[28px] group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">Music</span>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <RxText className="text-[20px] sm:text-[28px] group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">Text</span>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <TbMoodEdit className="text-[20px] sm:text-[28px] group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">Logo</span>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <SiSemanticrelease className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">Elements</span>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <GoProjectTemplate className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">Templates</span>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
        <BsThreeDots className="text-[20px] sm:text-[28px] group-hover:scale-95" />
        <span className="text-[8px] sm:text-[10px] font-medium">More</span>
      </div>
    </div>
  );
};
export default VideoEditPageSidebar;