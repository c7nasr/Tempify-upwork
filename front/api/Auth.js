import { checkCookies, getCookie, setCookies } from "cookies-next";
import TempifyAPI from "./Connection";
const AuthenticationProtocol = async (req = "", res = "",mail = "", password="") => {
    const API = new TempifyAPI();

  let opts;
  if (!req || !res) {
    // we are on the client
    opts = {};

  } else {
    opts = { req, res, maxAge: 60 * 60 * 24 };
  }

  const user = checkCookies("user", opts);

  if (!user ) {

    // otherwise we create a new account
    const account = await API.CreateNewEmail();

    // Login with  the account

    const { token, id } = await API.Login(account.username, account.password);


    const user_info = await API.GetUser(id, token);
    // Save Cookies


    setCookies("user", token, opts);
    setCookies("id", id, opts);
    setCookies("password", account.password, opts);

    return {
      user: user_info,
      token,
      id,
      password: account.password,
    };
  } else {
    const token = getCookie("user", opts);
    const id = getCookie("id", opts);
    const password = getCookie("password", opts);
    // Get User Info
    const user_info = await API.GetUser(id, token);
    return {
      user: user_info,
      token,
      id,
      password,
    };
  }
};

export default AuthenticationProtocol