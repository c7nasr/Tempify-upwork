import React, { useEffect } from "react";

import AuthenticationProtocol from "../api/Auth";
import Home from "../components/Home";
import Main from "../components/Main";

export default function Index({ user, token, id, password,messages }) {
  const [AllMessages,SetAllMessages] = React.useState([])

  return (
    <Home SetAllMessages={SetAllMessages} allMessages={AllMessages} user={user} token={token} id={id} password={password}>
      <Main user={user} token={token} id={id} password={password} SetAllMessages={SetAllMessages} allMessages={AllMessages}/>
    </Home>
  );
}
export const getServerSideProps = async ({ req, res }) => {
  const { user, token, id, password,messages } = await AuthenticationProtocol(req, res);
  if (!messages){
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      } ,props:{},
    }
  }
  return {
    props: {
      user,
      token,
      id,
      password: password,
      messages
    },
  };
};
