import MessageRow from "./MessageRow";
import React from "react";

function Inbox({AllMessages,token,id,user,password}) {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:max-w-full">
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2
            className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-300 sm:truncate"
          >
            Inbox
          </h2>
        </div>
      </div>
      <div
        className="mt-6 overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md"
      >
        {AllMessages?.map((message) => <MessageRow id={message.id} subject={message.subject} seen={message.seen} key={message.id} from={message.from} user={user} password={password} AllMessages={AllMessages} />)}
      
      </div>
    </div>
  );
}

export default Inbox;
