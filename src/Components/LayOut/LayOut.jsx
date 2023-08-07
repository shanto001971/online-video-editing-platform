import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const LayOut = () => {
    return (
        <div>
            <Navbar />
      <div className="min-h-[calc(100vh-136px)]  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Outlet />
      </div>
      <Footer />
        </div>
    );
};

export default LayOut;