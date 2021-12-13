import React from "react";

function Email() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:max-w-full">
      <div>
        <nav className="text-sm font-medium leading-5">
          <a
            href="/en/"
            className="flex items-center text-sm font-medium leading-5 text-gray-500 transition dark:hover:text-gray-400 hover:text-gray-700 focus:outline-none nuxt-link-active"
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
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-300 sm:truncate">
            View
          </h2>
        </div>
        <div className="flex flex-shrink-0 mt-4 overflow-y-auto md:ml-4 md:mt-0">
          <span className="rounded-md shadow-sm">
            <button
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
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download
            </button>
          </span>
          <span className="ml-3 rounded-md shadow-sm">
            <a
              href="/en/view-source/61b7041a5beb16f0e29e3ff2/"
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
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              Source
            </a>
          </span>
          <span className="ml-3 rounded-md shadow-sm">
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
          </span>
          <span className="ml-3 rounded-md shadow-sm">
            <button
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
      <div className="px-4 py-5 mt-4 overflow-hidden bg-white border-b border-gray-200 shadow dark:border-gray-900 sm:px-6 sm:rounded-md">
        <div className="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
          <div className="mt-4 ml-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201%201%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%3EInitials%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3E%3Ccc%3AAgent%3E%3Cdc%3Atitle%3EFlorian%20K%C3%B6rner%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%3Ehttps%3A%2F%2Fgithub.com%2Fdicebear%2Fdicebear%3C%2Fdc%3Asource%3E%3Ccc%3Alicense%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%22%2F%3E%3C%2Fcc%3AWork%3E%3Ccc%3ALicense%20rdf%3Aabout%3D%22https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%22%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23Reproduction%22%2F%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23Distribution%22%2F%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23DerivativeWorks%22%2F%3E%3C%2Fcc%3ALicense%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22avatarsRadiusMask%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23avatarsRadiusMask)%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23D81B60%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20style%3D%22%20font-family%3A%20Arial%2Csans-serif%3B%20font-size%3A%200.5px%22%20fill%3D%22%23FFF%22%20text-anchor%3D%22middle%22%20dy%3D%220.178%22%3EC7%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium leading-6 text-indigo-600">
                  Mahmoud Nasr
                  <span className="text-sm font-normal leading-5 text-gray-700">
                    c7nasr@gmail.com
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
                    <a
                      href="mailto:eizdcabpqad@leadwizzer.com"
                      className="ml-1"
                    >
                      eizdcabpqad@leadwizzer.com;
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
              2 minutes ago
            </time>
          </div>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <div className="h-full aspect-w-16 aspect-h-8">
            <iframe
              srcDoc='<html><head></head><body><div dir="ltr">dcdcdcdcdc</div></body></html>'
              className="w-full"
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
