import React, { useRef } from "react";

import Link from "next/link";
import ReactToPrint from "react-to-print";
import Router from "next/router";
import TempifyAPI from "../api/Connection";
import moment from "moment";
import toast from "react-hot-toast";

const API = new TempifyAPI();

function Email({ id, message, token }) {
  const componentRef = useRef();

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:max-w-full">
      <div>
        <Link href="/" className="text-sm font-medium leading-5">
          <a
            href="/"
            className="flex items-center text-sm font-medium leading-5 text-gray-500 transition dark:hover:text-gray-400 hover:text-gray-700 focus:outline-none "
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Back
          </a>
        </Link>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-300 sm:truncate">
            View
          </h2>
        </div>
        <div className="flex flex-shrink-0 mt-4 overflow-y-auto md:ml-4 md:mt-0">
          <span className="ml-3 rounded-md shadow-sm">
            <ReactToPrint
              trigger={() => (
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition bg-white border border-gray-300 rounded-md focus:ring-blue dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-gray dark:focus:border-gray-700 dark:text-gray-300 hover:text-gray-300 active:text-gray-800 active:bg-gray-50 dark-active:bg-gray-700 dark:bg-gray-800 focus:border-blue-300 dark:border-transparent focus:outline-none"
                >
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 -ml-1 text-gray-500 dark:text-gray-300"
                  >
                    <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                  </svg>
                  Print
                </button>
              )}
              content={() => componentRef.current}
            />
          </span>
          <span className="ml-3 rounded-md shadow-sm">
            <button
              onClick={() =>
                API.DeleteMessage(id, token).then(() => {
                  Router.push("/").then(() => {
                    toast.success("Message deleted successfully");
                  });
                })
              }
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition bg-white border border-gray-300 rounded-md focus:ring-blue dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-gray dark:focus:border-gray-700 dark:text-gray-300 hover:text-gray-300 active:text-gray-800 active:bg-gray-50 dark-active:bg-gray-700 dark:bg-gray-800 focus:border-blue-300 dark:border-transparent focus:outline-none"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2 -ml-1 text-gray-500 dark:text-gray-300"
              >
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              Delete
            </button>
          </span>
        </div>
      </div>
      <div
        className="px-4 py-5 mt-4 overflow-hidden bg-white border-b border-gray-200 shadow dark:border-gray-900 sm:px-6 sm:rounded-md"
        ref={componentRef}
      >
        <div className="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
          <div className="mt-4 ml-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src={
                    `https://ui-avatars.com/api/?background=FFA500&color=fff&name=` +
                    message.from.name
                  }
                  alt="Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium leading-6 text-indigo-600 ">
                  {message.from.name || "Unknown Name Sender"}
                  <span className="ml-2 text-sm font-normal leading-5 text-gray-700">
                    {message.from.address}
                  </span>
                </div>
                <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="flex-shrink-0 mr-1.5 w-5 h-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="truncate">
                    <a href={`mailto:${message.from.address}`} className="ml-1">
                      {message.to[0].address}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 mt-4 ml-4">
            <time
              dateTime="2021-12-13T08:27:57+00:00"
              className="text-gray-500 truncate"
            >
              {moment(message.createdAt).fromNow()}
            </time>
          </div>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <div className="h-full aspect-w-16 aspect-h-8">
            <iframe
              srcDoc={message.html}
              className="w-full min-h-screen"
              id="iFrameResizer0"
              scrolling="yes"
              style={{ overflow: "auto" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
