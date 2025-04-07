import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OnlineUsers from "../components/OnlineUsers";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div className="bg-[#fefaf4] ">
      <Navbar />
      <main className="overflow-y-auto h-screen">
        <Sidebar/>
        <Outlet />
        <OnlineUsers />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
