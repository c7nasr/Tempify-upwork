import Email from "./Email";
import Empty from "./Empty";
import Inbox from "./Inbox";
import React from "react";

function Main({ messages,user, id, token }) {
  console.log(messages);
  return (
    <div className="h-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:max-w-full">
      {messages?.length == 0 ? <Empty /> : <Inbox token={token} id={id} messages={messages}/>}
    </div>
  );
}

export default Main;
