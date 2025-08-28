import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";
import Footer from "../components/UI/Footer";

const Layout = () => {
  const Location = useLocation();
  const isInstructor = Location.pathname.split("/").includes("instructor");
  return (
    <>
      {isInstructor ? (
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-emerald-950">
            <SideBar />
          </div>
          <div className="col-span-10">
            <DashboardHeader />
            <main className="bg-gray-100 px-20 py-5">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <main className=" mx-auto w-full md:w-10/12">
            <Outlet />
          </main>
        </>
      )}
      <Footer />
    </>
  );
};

export default Layout;
