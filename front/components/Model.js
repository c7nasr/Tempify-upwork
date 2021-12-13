import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import CreateForm from "./CreateForm";
import { HiOutlineMail } from "react-icons/hi";
import LoginForm from "./LoginForm";

export default function CreateModal({
  setIsOpen,
  isOpen,
  closeModal,
  isLogin,
}) {
  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
        className="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 opacity-75 dark:bg-gray-900" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:max-w-lg sm:w-full sm:p-6">
              {isLogin ? <LoginForm closeModal={closeModal}/> : <CreateForm closeModal={closeModal}/> }
              
              </div>
            </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
