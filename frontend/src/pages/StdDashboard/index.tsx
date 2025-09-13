import { Outlet } from "react-router-dom";
import StdDashBoardHeader from "../../components/stdDashboard/StdDashBoardHeader";
import Footer from "../../components/UI/Footer";

function StdDashBoard() {
  return (
    
    <div className="h-screen pt-12 bg-gradient-to-b from-[#FFEEE8] from-20% to-white to-20%">
      <StdDashBoardHeader user={{id:"1",userName:'Kevin Gilbert' , headline:'web Designer & best-Selling Instructor'}}/>
      <main className="w-full lg:w-9/12 mx-auto mb-6">
        <Outlet/>
      </main>
      <Footer/>
    </div>
    
  );
}

export default StdDashBoard;
