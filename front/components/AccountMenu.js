import { Fragment, useEffect, useRef, useState } from "react";
import { HiOutlineLogout, HiUserAdd } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";

import { AiOutlineUser } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CreateModal from "./Model";
import DeleteAccountDialog from "./DeleteAccount";
import TempifyAPI from "../api/Connection";
import toast from "react-hot-toast";

const API = new TempifyAPI();
export default function AccountMenu({ user, token, id, password }) {
  const [ShowPassword, SetSeePassword] = useState(false);
  const [isLogin, SetIsLogin] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isDeleteAccount, setIsDeleteAccount] = useState(false);

  function closeModal() {
    setIsOpen(false);
    if (isLogin) {
      SetIsLogin(false);
    }
  }

  function openModal(login = false) {
    if (login) {
      SetIsLogin(true);
    }
    setIsOpen(true);
  }

  return (
    <div className="flex">
      <CreateModal
        closeModal={closeModal}
        openModal={openModal}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isLogin={isLogin}
      />
      <DeleteAccountDialog
      id={id}
        isOpen={isDeleteAccount}
        setIsOpen={setIsDeleteAccount}
        closeModal={() => setIsDeleteAccount(false)}
        openModal={() => setIsOpen(true)}
      />
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex w-8 text-sm transition border-transparent focus:border-gray-300 focus:outline-none">
          <img
            src={`https://ui-avatars.com/api/?background=FFA500&color=fff&name=${
              user?.address?.split("@")[0]
            }&size=512`}
            className="w-6 h-6 rounded-full"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-20 w-64 mt-2 origin-top-right rounded-md shadow-lg dark:shadow-none ">
            <div className="bg-white rounded-md shadow-xs dark:bg-gray-800 dark:shadow-none">
              <div className="px-4 py-3">
                <p className="text-sm leading-5 text-gray-800 dark:text-gray-400">
                  You are signed in as
                </p>
                <CopyToClipboard
                  text={user.address}
                  onCopy={() => toast.success("Address copied to clipboard")}
                >
                  <p className="text-sm font-medium leading-5 text-gray-900 truncate cursor-pointer select-all dark:text-gray-300">
                    {user.address}
                  </p>
                </CopyToClipboard>
                <CopyToClipboard
                  text={password}
                  onCopy={() => toast.success("Password copied to clipboard")}
                >
                  <p
                    className="text-sm leading-5 text-gray-800 dark:text-gray-400"
                    onClick={() => SetSeePassword(true)}
                  >
                    Password:
                    <span
                      className={`cursor-pointer select-all  ${
                        ShowPassword ? "" : "account-blur"
                      }`}
                    >
                      {password}
                    </span>
                  </p>
                </CopyToClipboard>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700"></div>
              <div className="py-1 cursor-pointer">
                <Menu.Item>
                  <span
                    onClick={() => openModal(false)}
                    className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 group dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-800 dark:focus:text-gray-300 dark:text-gray-400 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                  >
                    <HiUserAdd className="w-5 h-5 mr-3 text-gray-400 dark:group-hover:text-gray-300 dark:group-focus:text-gray-300 dark:text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" />{" "}
                    Create a new Account
                  </span>
                </Menu.Item>
              </div>

              <div className="py-1 cursor-pointer">
                <Menu.Item>
                  <span
                    onClick={() => openModal(true)}
                    className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 group dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-800 dark:focus:text-gray-300 dark:text-gray-400 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                  >
                    <AiOutlineUser className="w-5 h-5 mr-3 text-gray-400 dark:group-hover:text-gray-300 dark:group-focus:text-gray-300 dark:text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" />{" "}
                    Login
                  </span>
                </Menu.Item>
              </div>

              <div className="py-1 cursor-pointer">
                <Menu.Item>
                  <span
                    onClick={() => setIsDeleteAccount(true)}
                    className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 group dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-800 dark:focus:text-gray-300 dark:text-gray-400 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                  >
                    <BiTrash className="w-5 h-5 mr-3 text-gray-400 dark:group-hover:text-gray-300 dark:group-focus:text-gray-300 dark:text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" />{" "}
                    Delete Account
                  </span>
                </Menu.Item>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700"></div>
              <div className="py-1 cursor-pointer">
                <Menu.Item>
                  <span
                    onClick={async () => {
                      await API.Logout();
                    }}
                    className="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 group dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-800 dark:focus:text-gray-300 dark:text-gray-400 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                  >
                    <HiOutlineLogout className="w-5 h-5 mr-3 text-gray-400 dark:group-hover:text-gray-300 dark:group-focus:text-gray-300 dark:text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500" />
                    Logout
                  </span>
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
