import { Outlet } from "react-router-dom";
import Topbar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MasterLayout() {
  return (
    <div className="flex flex-col ">
      <Topbar />
      <div className="flex-grow">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
}
