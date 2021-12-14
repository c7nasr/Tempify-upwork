import { Dialog, Transition } from "@headlessui/react";

import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import Cookier from "../api/Cookier";
import { HiOutlineMail } from "react-icons/hi";
import React from "react";
import TempifyAPI from "../api/Connection";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const API = new TempifyAPI();


function LoginForm({ closeModal }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const user = await API.Login(data.mail, data.password)
    if (user?.token){
      Cookier(user.token, user.id, data.password)
      closeModal()
      router.replace(window.location.pathname)
    }else{
      toast.error("Email or Password is not correct")
    }
    
  }
  return (
    <>
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-100 rounded-full dark:bg-indigo-400">
        <AiOutlineUser className="w-6 h-6 text-indigo-600 dark:text-indigo-800" />
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300"
        >
          Login to your account
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm leading-5 text-gray-500">
            Here you can log in to your account
          </p>
        </div>

        <div className="mt-2 text-left">
          <span>
            <form>
              <div>
                <span>
                  <label
                    for="address"
                    className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-400"
                  >
                    Email
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                      <HiOutlineMail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                    {...register("mail",{required:true})}
                      id="address"
                      type="email"
                      placeholder="Email"
                      className="block w-full px-3 py-2 pl-10 pr-12 border border-gray-300 rounded-md appearance-none dark:focus:outline-none dark:focus:border-blue-600 dark:text-white dark:bg-gray-700 focus:border-blue-300 dark:border-gray-800 focus:outline-none sm:text-sm sm:leading-5"
                    />
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
                      {...register("password",{required:true})}
                      placeholder="Password"
                      type="password"
                      className="block w-full px-3 py-2 pl-10 pr-12 placeholder-gray-400 transition border border-gray-300 rounded-none appearance-none dark:focus:outline-none dark:focus:border-blue-600 dark:text-white dark:bg-gray-700 focus:border-blue-300 dark:border-gray-800 rounded-l-md focus:outline-none sm:text-sm sm:leading-5"
                    />
                  </div>
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400"></p>
                </span>
              </div>
            </form>
          </span>
          {errors.length > 0 && (
                <span className="flex justify-center mt-2 text-center text-red-700">
                  Username or password is incorrect.
                </span>
              )}
          <div className="mt-5 sm:grid sm:gap-3 sm:grid-flow-row-dense sm:grid-cols-2 sm:mt-8">
            <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
              <button
              onClick={handleSubmit(onSubmit)}
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition bg-indigo-600 border border-transparent rounded-md shadow-sm focus:ring-indigo hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none sm:text-sm sm:leading-5"
              >
                Login
              </button>
            </span>{" "}
            <span className="flex w-full mt-3 rounded-md shadow-sm sm:col-start-1 sm:mt-0">
              <button
                onClick={closeModal}
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue dark:text-gray-300 hover:text-gray-300 dark:bg-gray-700 focus:border-blue-300 dark:border-gray-800 focus:outline-none sm:text-sm sm:leading-5"
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
