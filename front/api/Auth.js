import { checkCookies, getCookie, removeCookies, setCookies } from "cookies-next";

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
    let password
    if (account)
      password = account.address.split("@")[0]
    const {id,token} = await API.Login(account.address,password );

 
    const messages = await API.GetAllMessages(token)


    const user_info = await API.GetUser(id, token);
    // Save Cookies
    console.log(user_info,account,id,token);
    if (user_info && account && token && id){
      setCookies("user", token, opts);
      setCookies("id", id, opts);
      setCookies("password", password, opts);
    }
   


    return {
      user: user_info,
      token:token,
      id:id,
      password,
      messages
    };
  } else {
    const token = getCookie("user", opts);
    const id = getCookie("id", opts);
    const password = getCookie("password", opts);
    // Get User Info
    const user_info = await API.GetUser(id, token);
    const messages = await API.GetAllMessages(token)
 

    

    return {
      user: user_info,
      token,
      id,
      password,
      messages
    };
  }
};

export default AuthenticationProtocol