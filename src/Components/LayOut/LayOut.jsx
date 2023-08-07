import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const LayOut = () => {
    return (
        <div>
            <Navbar />
      <div className="min-h-[calc(100vh-136px)]  px-4  mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
        <Outlet />
      </div>
      <Footer />
        </div>
    );
};

export default LayOut;