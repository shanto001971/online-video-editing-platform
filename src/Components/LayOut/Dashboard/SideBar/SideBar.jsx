import VideoEditPageSidebar from "../VideoEditPageSidebar/VideoEditPageSidebar";

const SideBar = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary px-8 py-3 font-semibold rounded bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-gray-100
            mt-6 mr-36 lg:hidden"
          >
            Open drawer
          </label>
          
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
          <ul className="menu p-0 w-80 h-full bg-gray-50 lg:bg-white text-base-content border-r-2 border-slate-400">
            {/* <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li> */}
            <VideoEditPageSidebar/>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default SideBar;
