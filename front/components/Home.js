import Navbar from "./Navbar";
import React from "react";
import Sidebar from "./Sidebar";

function Home({ children }) {
  return (
    <div className="flex h-screen overflow-hidden antialiased bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Navbar />
        <main
          tabIndex="0"
          className="relative z-0 flex-1 py-6 overflow-y-auto focus:outline-none"
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Home;
