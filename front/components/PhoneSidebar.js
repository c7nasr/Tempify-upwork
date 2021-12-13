import React from "react";
import SidebarItems from "./SidebarItems";
import { Transition } from "@headlessui/react";

function PhoneSidebar({ ToggleNavbar, NavbarStatus }) {
  if (!NavbarStatus) return null;
  return (
    <div className="md:hidden">
      <div className="fixed inset-0 z-40 flex">
        <Transition
          show={NavbarStatus}
          enterFrom="transition-opacity duration-300 ease-linear"
          className={
            "fixed inset-0 transition-opacity duration-300 ease-linear"
          }
          appear={NavbarStatus}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-50 dark:bg-gray-800"></div>
        </Transition>
        <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white dark:bg-gray-900 ">
          <div className="absolute top-0 right-0 p-1 -mr-14">
            <button
              aria-label="Close sidebar"
              onClick={() => ToggleNavbar(false)}
              className="flex items-center justify-center w-12 h-12 rounded-full focus:bg-gray-600 focus:outline-none"
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white dark:text-gray-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <SidebarItems />
        </div>
      </div>
    </div>
  );
}

export default PhoneSidebar;
