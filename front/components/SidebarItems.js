import { BiRefresh } from "react-icons/bi";
import { BsInbox } from "react-icons/bs";
import Link from "next/link";
import Progressbar from "./Progressbar";
import React from "react";
import TempifyAPI from "../api/Connection";
import prettyBytes from "pretty-bytes";

const API = new TempifyAPI();


function SidebarItems({id,token,user}) {

  const [AllMessages,SetAllMessages] = React.useState()
  
  const RefreshInbox = async () => {
  const messages=   await API.GetAllMessages(token)
  SetAllMessages(messages)
  }
  return (
    <>
      <div className="flex items-center flex-shrink-0 px-4">
        <Link href="/" >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 147 32"
            className="h-8 dark-img"
          >
            <path
              d="M56.584 8.552c1.835 0 3.296.597 4.384 1.792 1.11 1.195 1.664 2.795 1.664 4.8V25h-4.128v-9.568c0-.96-.235-1.707-.704-2.24-.47-.533-1.13-.8-1.984-.8-.939 0-1.675.31-2.208.928-.512.619-.768 1.515-.768 2.688V25h-4.128v-9.568c0-.96-.235-1.707-.704-2.24-.47-.533-1.13-.8-1.984-.8-.917 0-1.653.31-2.208.928-.533.619-.8 1.515-.8 2.688V25h-4.128V9h4.128v1.696c.96-1.43 2.443-2.144 4.448-2.144 1.963 0 3.413.768 4.352 2.304 1.067-1.536 2.656-2.304 4.768-2.304ZM78.298 9h4.128v16h-4.128v-1.888c-1.237 1.557-2.976 2.336-5.216 2.336-2.133 0-3.968-.81-5.504-2.432-1.515-1.643-2.272-3.648-2.272-6.016s.757-4.363 2.272-5.984c1.536-1.643 3.37-2.464 5.504-2.464 2.24 0 3.979.779 5.216 2.336V9Zm-7.616 11.264c.832.832 1.888 1.248 3.168 1.248 1.28 0 2.336-.416 3.168-1.248.853-.853 1.28-1.941 1.28-3.264 0-1.323-.427-2.4-1.28-3.232-.832-.853-1.888-1.28-3.168-1.28-1.28 0-2.336.427-3.168 1.28-.832.832-1.248 1.91-1.248 3.232 0 1.323.416 2.41 1.248 3.264ZM88.217 7.08c-.682 0-1.28-.245-1.792-.736-.49-.512-.736-1.11-.736-1.792 0-.683.246-1.28.736-1.792.512-.512 1.11-.768 1.792-.768.704 0 1.302.256 1.792.768.512.512.768 1.11.768 1.792 0 .683-.256 1.28-.768 1.792-.49.49-1.088.736-1.792.736ZM86.17 25V9h4.128v16H86.17Zm7.907 0V1.64h4.128V25h-4.128Zm12.226-.384a2.62 2.62 0 0 1-1.92.8 2.618 2.618 0 0 1-1.92-.8 2.616 2.616 0 0 1-.8-1.92c0-.747.266-1.387.8-1.92a2.618 2.618 0 0 1 1.92-.8 2.62 2.62 0 0 1 1.92.8c.533.533.8 1.173.8 1.92a2.62 2.62 0 0 1-.8 1.92Z"
              fill="#fff"
            ></path>
            <path
              d="M119.696 12.968h-3.616v6.656c0 .555.139.96.416 1.216.278.256.683.405 1.216.448.534.021 1.195.01 1.984-.032V25c-2.837.32-4.842.053-6.016-.8-1.152-.853-1.728-2.379-1.728-4.576v-6.656h-2.784V9h2.784V5.768l4.128-1.248V9h3.616v3.968Zm20.857-4.416c1.834 0 3.296.597 4.384 1.792 1.109 1.195 1.664 2.795 1.664 4.8V25h-4.128v-9.568c0-.96-.235-1.707-.704-2.24-.47-.533-1.131-.8-1.984-.8-.939 0-1.675.31-2.208.928-.512.619-.768 1.515-.768 2.688V25h-4.128v-9.568c0-.96-.235-1.707-.704-2.24-.47-.533-1.131-.8-1.984-.8-.918 0-1.654.31-2.208.928-.534.619-.8 1.515-.8 2.688V25h-4.128V9h4.128v1.696c.96-1.43 2.442-2.144 4.448-2.144 1.962 0 3.413.768 4.352 2.304 1.066-1.536 2.656-2.304 4.768-2.304Z"
              fill="#6875F5"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.486 7.512a12 12 0 1 0-1.972 18.568 2 2 0 1 1 2.174 3.356A16 16 0 1 1 32 15.998a6 6 0 0 1-9.6 4.802 8 8 0 1 1 1.6-4.802 2 2 0 1 0 4 0c0-3.074-1.172-6.14-3.514-8.486ZM20 15.998a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
              fill="#6875F5"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="flex flex-col flex-1 h-0 mt-5 overflow-y-auto">
        <nav className="flex-1 px-2">
          <Link href="/">
          <span href="/" className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-900 transition rounded-md cursor-pointer group dark:hover:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:text-white dark:focus:bg-gray-800 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 ">
            <BsInbox className="w-6 h-6 mr-3 text-gray-500 transition dark:group-hover:text-gray-300 dark:group-focus:text-gray-300 dark:text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600"/>
            Inbox
          </span>
          </Link>
          <span
            onClick={RefreshInbox}
            className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition rounded-md group dark:hover:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:text-white dark:focus:bg-gray-800 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 "
          >
          <BiRefresh className="w-6 h-6 mr-3 text-gray-400 transition dark:group-hover:text-gray-300 dark:group-focus:text-gray-300 dark:text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"/>
            Refresh
          </span>
        </nav>
      </div>
      <div className="px-2 mt-10 mb-2">
        <dl className="px-3 py-2">
          <dd className="flex items-baseline mt-1 text-sm">
            <span className="leading-5 text-gray-600 dark:text-indigo-400">
              {user && prettyBytes(user.used || 0)}
            </span>
            <span className="ml-2 font-medium leading-5 text-gray-500 dark:text-gray-300">
              / 40 MB
            </span>
          </dd>
          <dd className="mt-2">
            <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-200 rounded dark:bg-gray-600">
              <div
                className="flex flex-col justify-center text-center text-white bg-gray-500 shadow-none whitespace-nowrap dark:bg-indigo-400"
                style={{ width: `${user.used / user.quota}` }}
              ></div>
            </div>
          </dd>
        </dl>
      </div>
      <div className="flex flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex justify-center md:order-2">
            <p className="text-sm leading-6 text-center text-gray-500 dark:text-gray-400">
              © 2021 Tempify
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarItems;
