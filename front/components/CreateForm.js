import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import React from "react";

function CreateForm({ closeModal }) {
  return (
    <div>
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-100 rounded-full dark:bg-indigo-400">
        <AiOutlineUser className="w-6 h-6 text-indigo-600 dark:text-indigo-800" />
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <h3
          id="modal-headline"
          className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300"
        >
          Create an account
        </h3>
        <div className="mt-2">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            Here you can create a new account for this you need to select a
            username, then domain and password!
          </p>
        </div>
        <div className="mt-2 text-left">
          <span>
            <form>
              <div>
                <span>
                  <label
                    for="username"
                    className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-400"
                  >
                    Email
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                      <HiOutlineMail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username"
                      className="block w-full px-3 py-2 pl-10 pr-12 border border-gray-300 rounded-md appearance-none dark:focus:outline-none dark:focus:border-blue-600 dark:text-white dark:bg-gray-700 focus:border-blue-300 dark:border-gray-800 focus:outline-none sm:text-sm sm:leading-5"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <select className="py-0 pl-2 text-gray-500 bg-transparent border-transparent rounded-md dark:focus:outline-none dark:focus:border-blue-600 pr-7 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 sm:text-sm sm:leading-5">
                        <option value="alilot.com">alilot.com</option>
                      </select>
                    </div>
                  </div>
                </span>
              </div>
              <div className="mt-6">
                <span>
                  <label
                    for="password"
                    className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-400"
                  >
                    Password
                  </label>
                  <div className="relative flex mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                      <BsKey className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      required="required"
                      placeholder="Password"
                      type="password"
                      className="block w-full px-3 py-2 pl-10 pr-12 placeholder-gray-400 transition border border-gray-300 rounded-md appearance-none dark:focus:outline-none dark:focus:border-blue-600 dark:text-white dark:bg-gray-700 focus:border-blue-300 dark:border-gray-800 focus:outline-none sm:text-sm sm:leading-5"
                    />
                  </div>
                </span>
              </div>
              <div className="mt-5 sm:grid sm:gap-3 sm:grid-flow-row-dense sm:grid-cols-2 sm:mt-8">
                <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition bg-indigo-600 border border-transparent rounded-md shadow-sm focus:ring-indigo hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none sm:text-sm sm:leading-5"
                  >
                    Create
                  </button>
                </span>{" "}
                <span className="flex w-full mt-3 rounded-md shadow-sm sm:col-start-1 sm:mt-0">
                  <button
                    onClick={() => closeModal()}
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue dark:text-gray-300 hover:text-gray-500 dark:bg-gray-700 focus:border-blue-300 dark:border-gray-800 focus:outline-none sm:text-sm sm:leading-5"
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </form>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
