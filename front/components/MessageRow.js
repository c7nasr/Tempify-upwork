import Link from "next/link";
import React from "react";

function MessageRow({ id, from, subject, seen, user, AllMessages, password }) {
  console.log(user);
  return (
    <ul className="divide-y divide-gray-200 cursor-pointer dark:divide-gray-700">
      <li>
        <Link
          href={{
            pathname: `/view/${id}`,
            query: {
              user:JSON.stringify(user),
              AllMessages:JSON.stringify(AllMessages),
              password,
            },
          }}
          as={`/view/${id}`}
          className="block transition dark:hover:bg-gray-700 dark:focus:bg-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="flex items-center flex-1 min-w-0">
              <div className="flex-shrink-0">
                <span className="relative inline-block">
                  <img
                    src={
                      "https://ui-avatars.com/api/?background=FFA500&color=fff&name=" +
                      from.name
                    }
                    alt="Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  {!seen && (
                    <span className="absolute bottom-0 right-0 block w-3 h-3 text-white bg-blue-500 rounded-full shadow-solid dark:text-gray-500 dark:bg-blue-600" />
                  )}
                </span>
              </div>
              <div className="flex-1 min-w-0 px-4 md:grid md:gap-4 md:grid-cols-2">
                <div>
                  <div className="text-sm font-medium leading-5 text-indigo-600 truncate dark:text-indigo-400">
                    {from.name}
                  </div>
                  <div className="flex items-center mt-2 text-sm leading-5 text-gray-500 dark:text-gray-400">
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
                    <span className="truncate">{from.address}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div>
                    <div className="text-sm leading-5 text-gray-900 truncate dark:text-gray-300"></div>
                    <div className="flex items-center mt-2 text-sm leading-5 text-gray-400 truncate dark:text-gray-400">
                      {subject || "No Subject Detected"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default MessageRow;
