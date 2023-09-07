import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Shared/SideBar";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[80px]">
        <Sidebar />
      </div>
      <div className="w-full md:px-4 px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
