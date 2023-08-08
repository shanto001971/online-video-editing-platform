import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const LayOut = () => {
    return (
        <>
            <Navbar />
      <div className="min-h-[calc(100vh-136px)]  px-4  mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-11">
        <Outlet />
      </div>
      <Footer />
        </>
    );
};

export default LayOut;