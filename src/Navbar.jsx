import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center relative dark:bg-gray-700 bg-white shadow-lg w-full h-[82px] md:top-0">
        <div className="absolute top-6 sm:left-20 left-5">
          <Link to="/" className="text-2xl dark:text-white font-bold">
            Where in the world?
          </Link>
        </div>

        <div className="absolute top-6 sm:right-20 right-4">
          <button
            onClick={toggleDarkMode}
            className="flex flex-row absolute sm:h-6 sm:right-6 right-2"
          >
            {!darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            <p className="text-black text-sm text-left dark:text-white pl-2">
              DarkMode
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
