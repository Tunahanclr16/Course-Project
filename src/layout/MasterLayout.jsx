import { Outlet } from "react-router-dom";
import Topbar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MasterLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <div className="flex-grow">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
