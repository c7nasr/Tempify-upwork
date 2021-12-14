import Email from "./Email";
import Empty from "./Empty";
import Inbox from "./Inbox";
import React from "react";
import TempifyAPI from "../api/Connection";
const API = new TempifyAPI();

function Main({ user, id, token, allMessages, SetAllMessages }) {
  React.useEffect(() => {
    async function RefreshInbox() {
      const messages = await API.GetAllMessages(token);
      SetAllMessages(messages);
    }

    RefreshInbox();
  }, []);
  return (
    <div className="h-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:max-w-full">
      {allMessages?.length == 0 ? (
        <Empty />
      ) : (
        <Inbox AllMessages={allMessages} token={token} id={id} />
      )}
    </div>
  );
}

export default Main;
