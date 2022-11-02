import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5 relative bg-sidebar h-screen w-64 sm:block shadow-xl">
        <Sidebar />
      </div>
      <div className="basis-4/5 bg-gray-50">
        <Navbar />
        <div class="w-full overflow-x-hidden flex flex-col">
          <main class="w-full flex-grow p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
