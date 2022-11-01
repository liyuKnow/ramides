import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
  return (
    <>
      {/* <div className="bg-gray-100 font-family-karla flex">
        <Sidebar />
        <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
          <Navbar />
          <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6"> */}
      <Outlet />
      {/* </main>

            <Footer />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Layout;
