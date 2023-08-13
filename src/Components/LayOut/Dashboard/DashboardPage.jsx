import SideBar from "./SideBar/SideBar";
import Dashboard from "./UserNavbar/Dashboard";

const DashboardPage = () => {
    return (
        <div className="divide-y divide-slate-400 ">
          <Dashboard></Dashboard> 
          <SideBar></SideBar> 
        </div>
    );
};

export default DashboardPage;