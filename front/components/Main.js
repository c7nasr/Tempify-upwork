import Email from "./Email";
import Empty from "./Empty";
import Inbox from "./Inbox";
import React from "react";

function Main({ user, id, token }) {
  return (
    <div className="h-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:max-w-full">
      {user.used == 0 ? <Empty /> : <Inbox token={token} id={id}/>}
    </div>
  );
}

export default Main;
