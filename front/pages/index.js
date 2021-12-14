import React, { useEffect } from "react";

import AuthenticationProtocol from "../api/Auth";
import Home from "../components/Home";
import Main from "../components/Main";

export default function Index({ user, token, id, password }) {

  return (
    <Home user={user} token={token} id={id} password={password}>
      <Main user={user} token={token} id={id} password={password} />
    </Home>
  );
}
export const getServerSideProps = async ({ req, res }) => {
  const { user, token, id, password } = await AuthenticationProtocol(req, res);
  return {
    props: {
      user,
      token,
      id,
      password: password,
    },
  };
};
