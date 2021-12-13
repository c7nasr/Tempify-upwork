import AccountMenu from "./AccountMenu";
import { HiOutlineLogout } from "react-icons/hi";
import PhoneSidebar from "./PhoneSidebar";
import React from "react";

function Navbar() {
  const [NavbarStatus, ToggleNavbar] = React.useState(false);
  return (
    <div className="relative flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <button
        aria-label="Open sidebar"
        onClick={() => ToggleNavbar(true)}
        className="px-4 text-gray-500 border-r border-gray-200 dark:focus:bg-gray-900 dark:focus:text-gray-400 focus:text-gray-600 focus:bg-gray-100 dark:border-gray-600 focus:outline-none md:hidden"
      >
        <svg
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          ></path>
        </svg>
      </button>
      {<PhoneSidebar ToggleNavbar={ToggleNavbar} NavbarStatus={NavbarStatus} />}

      <div className="flex justify-between flex-1 px-4">
        <div className="flex flex-1">
          <div className="flex w-full ring-0 md:ml-0">
            <label htmlFor="address" className="sr-only">
              Email
            </label>
            <div className="relative w-full text-gray-400 group">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400 dark:group-hover-text-gray-400 group-hover:text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="hidden w-5 h-5 text-gray-400 dark:group-hover-text-gray-400 group-hover:text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <input
                id="address"
                placeholder="..."
                readOnly
                title="Your temporary Email address, click to copy to clipboard!"
                type="email"
                className="block w-full h-full py-2 pl-8 pr-3 text-gray-600 border-transparent cursor-pointer select-all focus:placeholder-gray-400 dark:group-hover:text-gray-400 dark:text-gray-300 group-hover:text-gray-900 dark:bg-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex items-center sm:ml-4 md:ml-6">
            <div className="relative ml-4">
              <AccountMenu />
            </div>
            <div className="relative ml-4">
              <HiOutlineLogout className="flex items-center w-6 h-6 max-w-xs text-gray-400 rounded-md cursor-pointer dark:hover:text-white dark:focus:outline-none dark:focus:text-white dark:hover:bg-gray-800 hover:text-gray-500 focus:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
