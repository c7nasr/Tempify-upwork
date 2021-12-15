import Navbar from "./Navbar";
import React from "react";
import Sidebar from "./Sidebar";

function Home({ children,user, token,id , password,SetAllMessages,allMessages}) {

  return (
    <div className="flex h-screen overflow-hidden antialiased bg-gray-100 dark:bg-gray-900">
      <Sidebar id={id} token={token} user={user} SetAllMessages={SetAllMessages} allMessages={allMessages}/>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Navbar user={user} token={token} id={id} password={password} SetAllMessages={SetAllMessages}  />
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
