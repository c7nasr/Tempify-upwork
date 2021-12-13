import PhoneSidebar from './PhoneSidebar'
import React from 'react'

function Navbar() {
  const [NavbarStatus,ToggleNavbar] = React.useState(false)
    return (
        <div className="relative flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <button
          aria-label="Open sidebar"
          onClick={() =>ToggleNavbar(true)}
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
        {<PhoneSidebar ToggleNavbar={ToggleNavbar} NavbarStatus={NavbarStatus}/>}
       
        <div className="flex justify-between flex-1 px-4">
          <div className="flex flex-1">
            <div className="flex w-full ring-0 md:ml-0">
              <label htmlFor="address" className="sr-only">
                Email
              </label>
              <div className="relative w-full text-gray-400 group">
                <div
                  className="absolute inset-y-0 left-0 flex items-center pointer-events-none "
                >
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
     
              
            <div className="relative ml-4">
              <div>
                <button
                  id="accounts-menu"
                  aria-label="Accounts list"
                  aria-haspopup="true"
                  className="flex text-sm transition border-transparent rounded-full focus:border-gray-300 focus:outline-none"
                >
                  <img
                    src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201%201%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%3EInitials%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3E%3Ccc%3AAgent%3E%3Cdc%3Atitle%3EFlorian%20K%C3%B6rner%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%3Ehttps%3A%2F%2Fgithub.com%2Fdicebear%2Fdicebear%3C%2Fdc%3Asource%3E%3Ccc%3Alicense%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%22%2F%3E%3C%2Fcc%3AWork%3E%3Ccc%3ALicense%20rdf%3Aabout%3D%22https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%22%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23Reproduction%22%2F%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23Distribution%22%2F%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23DerivativeWorks%22%2F%3E%3C%2Fcc%3ALicense%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22avatarsRadiusMask%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23avatarsRadiusMask)%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23FB8C00%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20style%3D%22%20font-family%3A%20Arial%2Csans-serif%3B%20font-size%3A%200.5px%22%20fill%3D%22%23FFF%22%20text-anchor%3D%22middle%22%20dy%3D%220.178%22%3EEI%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
              </div>
            </div>
            <div className="relative ml-4">
              <button
                id="logout"
                aria-label="Sign out"
                title="Sign out"
                className="flex items-center max-w-xs text-gray-400 rounded-md dark:hover:text-white dark:focus:outline-none dark:focus:text-white dark:hover:bg-gray-800 hover:text-gray-500 focus:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navbar
