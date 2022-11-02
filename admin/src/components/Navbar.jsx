import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <header
      className={`fixed w-full z-30 bg-opacity-40 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <NavLink to="/" className="block" aria-label="Ramides">
              <div className="flex gap-4">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="header-logo"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="url(#header-logo)"
                    fillRule="nonzero"
                  />
                </svg>
                <h1>Ramides</h1>
              </div>
            </NavLink>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {currentUser?.id && (
                <>
                  <li>
                    <button
                      onClick={logout}
                      className="font-medium text-blue-600 hover:text-gray-900 px-5 border-2 border-cyan-300 rounded p-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
    // <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
    //   <div class="w-1/2"></div>
    //   <div x-data="{ isOpen: false }" class="relative w-1/2 flex justify-end">
    //     <button class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
    //       <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
    //     </button>
    //     <button
    //       x-show="isOpen"
    //       class="h-full w-full fixed inset-0 cursor-default"
    //     ></button>
    //     <div
    //       x-show="isOpen"
    //       class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
    //     >
    //       <a href="#" class="block px-4 py-2 account-link hover:text-white">
    //         Account
    //       </a>
    //       <a href="#" class="block px-4 py-2 account-link hover:text-white">
    //         Support
    //       </a>
    //       <a href="#" class="block px-4 py-2 account-link hover:text-white">
    //         Sign Out
    //       </a>
    //     </div>
    //   </div>
    // </header>
  );
}

export default Navbar;
