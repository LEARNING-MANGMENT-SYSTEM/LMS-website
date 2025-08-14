import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";

const Layout = () => {
  const Location = useLocation();
  const isInstructor = Location.pathname.split("/").includes("instructor");
  return (
    <>
      {isInstructor ? (
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-blue-950">
            <SideBar />
          </div>
          <div className="col-span-10">
            <DashboardHeader />
            <div className="bg-gray-100 px-20 py-5">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Layout;
