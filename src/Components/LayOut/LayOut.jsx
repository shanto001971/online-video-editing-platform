import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-346px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayOut;
