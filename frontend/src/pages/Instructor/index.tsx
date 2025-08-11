import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import DashboardHeader from "../../components/DashboardHeader";

const Instructor = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-emerald-950">
          <SideBar />
        </div>
        <div className="col-span-10">
          <DashboardHeader />
          <div className="bg-gray-100 px-20 py-5"><Outlet /></div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
