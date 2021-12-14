import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { GoAlert } from "react-icons/go";
import TempifyAPI from "../api/Connection";
import toast from "react-hot-toast";

const API = new TempifyAPI();


export default function DeleteAccountDialog({
  isOpen,
  setIsOpen,
  closeModal,
  openModal,
  id
}) {

  const DeleteAccountDialogFunction = () => {
    toast.success("Deleting Your Account...");
    API.DeleteUser(id).then(() => {
      closeModal();
      toast.success("Account Deleted Successfully");

    })
    
  }

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
            <div className="overflow-hidden transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:max-w-lg sm:w-full">
              <div className="p-8 sm:flex sm:items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:w-10 sm:h-10">
                  <GoAlert className="w-6 h-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    id="modal-headline"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300"
                  >
                    Delete account
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete your account? All your
                      data will be permanently deleted.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 sm:flex sm:flex-row-reverse sm:px-6">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                  onClick={DeleteAccountDialogFunction}
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition bg-red-600 border border-transparent rounded-md shadow-sm focus:ring-red hover:bg-red-500 focus:border-red-700 focus:outline-none sm:text-sm sm:leading-5"
                  >
                    Delete
                  </button>
                </span>
                <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    onClick={() => closeModal()}
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-gray dark:focus:border-gray-900 dark:text-gray-300 hover:text-gray-500 dark:bg-gray-800 dark-active:bg-gray-900 focus:border-blue-300 dark:border-transparent focus:outline-none sm:text-sm sm:leading-5"
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
