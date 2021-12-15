import Email from "../../components/Email";
import Home from "../../components/Home";
import React from "react";
import TempifyAPI from "../../api/Connection";
import { getCookie } from "cookies-next";

const API = new TempifyAPI();
function MessageView({ id, password, AllMessages, user,message,token }) {
  return (
    <Home user={user} id={id} password={password} allMessages={AllMessages}>
      <Email id={id} message={message} token={token} />
    </Home>
  );
}

export default MessageView;
export async function getServerSideProps({ query,req,res }) {
  if (!query.user || !query.AllMessages || !query.password || !query.id) {
    return {
      notFound: true,
    };
  } else {
    const token =  getCookie("user",{req, res});
    if (!token){ return {
        notFound: true,
      }}
    

    const user = JSON.parse(query.user);
    const AllMessages = JSON.parse(query.AllMessages);

        // GET Email from server side
        const message = await API.GetMessageById(query.id,token)
        // Mark Message as Seen
        await API.MarkImageAsSeen(query.id,token)
        console.log(message);
         
    return {
      props: { user, AllMessages, password: query.password, id: query.id ,message,token}, // will be passed to the page component as props
    };
  }
}
