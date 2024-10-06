/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavbarComp = ({ setActiveTable, activeTable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Update the activeTable based on the current route
    switch (location.pathname) {
      case "/organicacid":
        setActiveTable("organicacid");
        break;
      case "/carotenoids":
        setActiveTable("carotenoids");
        break;
      default:
        setActiveTable("watersoluble");
    }
  }, [location.pathname, setActiveTable]);

  return (
    <nav className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Display the active page name in the Brand section */}
            <div className="text-sm md:text-lg font-bold text-teal-800">
              {/* <a href="/">{activeTable}</a> */}
              {activeTable}
            </div>
            {/* Always visible links: Home and About */}
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className={`text-slate-600 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/" ? "underline text-blue-300" : ""
                }`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`text-slate-600 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/about"
                    ? "underline text-blue-300"
                    : ""
                }`}
              >
                About
              </a>
            </div>
          </div>
          {/* Navbar menu button - visible on all screen sizes */}
          <div className="flex">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-300 hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Toggle additional links when the Navbar icon is clicked */}
      {isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-200">
          <a
            href="/watersoluble"
            className={`text-slate-600 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium  ${
              location.pathname === "/watersoluble"
                ? "underline text-blue-300"
                : ""
            } `}
            onClick={() => setActiveTable("watersoluble")}
          >
            Watersoluble
          </a>
          <a
            href="/organicacid"
            className={`text-slate-600 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/organicacid"
                ? "underline text-blue-300"
                : ""
            }`}
            onClick={() => setActiveTable("organicacid")}
          >
            OrganicAcid
          </a>
          <a
            href="/carotenoids"
            className={`text-slate-600 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/carotenoids"
                ? "underline text-blue-300"
                : ""
            }`}
            onClick={() => setActiveTable("carotenoids")}
          >
            Carotenoids
          </a>
          <a
            href="/starch"
            className={`text-slate-600 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/starch" ? "underline text-blue-300" : ""
            }`}
            onClick={() => setActiveTable("starch")}
          >
            Starch
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarComp;
