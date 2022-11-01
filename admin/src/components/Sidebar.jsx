import React from "react";
import { FaPlus, FaTachometerAlt } from "react-icons/fa";
import SideNavItem from "./SideNavItem";

const Sidebar = () => {
  return (
    <aside className="relative bg-sidebar  w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <a
          href="index.html"
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          Ramides Admin
        </a>
      </div>
      <nav className="text-white text-base font-semibold">
        <SideNavItem link={"/drivers"} icon={<FaPlus />} title="Home" />
        <SideNavItem link={"/drivers"} icon={<FaPlus />} title="Requests" />
        <SideNavItem link={"/drivers"} icon={<FaPlus />} title="Customers" />
        <SideNavItem link={"/drivers"} icon={<FaPlus />} title="Orders" />
        <SideNavItem link={"/drivers"} icon={<FaPlus />} title="Cars" />
        <SideNavItem link={"/drivers"} icon={<FaPlus />} title="Drivers" />
      </nav>
      <button
        type="button"
        class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
      >
        Hover me
      </button>
    </aside>
  );
};

export default Sidebar;
