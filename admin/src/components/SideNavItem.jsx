import React from "react";
import { NavLink } from "react-router-dom";
const SideNavItem = ({ link, icon, title }) => {
  return (
    <NavLink to={link}>
      <h3 className="flex cursor-pointer items-center text-white opacity-75 hover:opacity-100 py-2 pl-6 nav-item">
        {icon}
        {title}
      </h3>
    </NavLink>
  );
};

export default SideNavItem;
