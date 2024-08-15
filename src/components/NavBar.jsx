import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import useTheme from "../contexts/theme";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
   const { themeMode, lightTheme, darkTheme } = useTheme();
    const onChangeBtn = (e) => {
      const darkModeStatus = e.target.checked;
      darkModeStatus ? darkTheme() : lightTheme();
      
    };

  return (
    <header
      className={`shadow sticky z-50 top-0 ${
        themeMode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav
        className={`border-gray-200 px-4 py-0 lg:px-6 ${
          themeMode === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="src/components/icon.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div
            className={`lg:flex lg:items-center lg:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                "Home",
                "Entertainment",
                "Business",
                "Health",
                "Science",
                "Sports",
                "Technology",
                "Contact",
                "About",
              ].map((text, index) => (
                <li key={index}>
                  <NavLink
                    to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-orange-700"
                          : themeMode === "dark"
                          ? "text-white"
                          : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
              <li>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultValue
                    className="sr-only peer"
                    onChange={onChangeBtn}
                    checked={themeMode === "dark"}
                  />
                  <div
                    className={`relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 dark:peer-checked:bg-blue-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full ${
                      themeMode === "dark" ? "dark:bg-gray-700" : "bg-gray-200"
                    }`}
                  />
                  <span
                    className={`ml-3 text-sm font-medium ${
                      themeMode === "dark" ? "text-gray-300" : "text-gray-900"
                    }`}
                  >
                    Dark mode
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
