import { checkCookies, getCookie, setCookies } from "cookies-next";

import Home from "../components/Home";
import Main from "../components/Main";
import TempifyAPI from "../api/Connection";
import { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AuthenticationProtocol from "../api/Auth";
const API = new TempifyAPI();
export default function Index({ user, token, id, password }) {
  const router = useRouter();

  return (
    <Home user={user} token={token} id={id} password={password}>
      <Main user={user} token={token} id={id} password={password} />
    </Home>
  );
}
export const getServerSideProps = async ({ req, res }) => {
  const { user, token, id, password } = await AuthenticationProtocol(req, res);
  console.log(user, token, id, password);
  return {
    props: {
      user,
      token,
      id,
      password: password,
    },
  };
};
