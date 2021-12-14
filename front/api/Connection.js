import AuthenticationProtocol from "./Auth"
import axios from "axios";
import { removeCookies } from "cookies-next";
import toast from "react-hot-toast";

class TempifyAPI {
  constructor() {
    this.base_url = "http://localhost:5001";
    this.token = "";
    this.headers = {
      "Content-Type": "application/json",
    };
  }
  async getAllDomains() {
    try {
      const { data } = await axios.get(this.base_url + "/messages/domains");

      if (data.status === true) {
        return data.data;
      } else {
        toast.error("Something Went Error");
      }
    } catch (error) {
      toast.error("We think that our server is down, please try again");
      return "";
    }
  }

  async CreateNewEmail(username = "", password = "", domain = "") {
    let new_account;
    if (!username || !password || !domain) {
      new_account = await axios.post(this.base_url + "/users/auth/new");
    } else {
      new_account = await axios.post(
        this.base_url + "/users/auth/new",
        {
          email: `${username}@${domain}`,
          password,
        },
        {
          headers: this.headers,
        }
      );
    }

    if (new_account.data.status === true) {
      return new_account.data.data;
    } else {
      return "";
    }
  }

  async Login(email, password) {
    const { data } = await axios.post(this.base_url + "/users/auth/login", {
      mail: email,
      pass: password,
    });
    if (data.status === true) {
      return { token: data.data.token, id: data.data.id };
    } else {
      return {};
    }
  }

  async GetUser(id, token) {
    try {
      const { data } = await axios.get(
        `${this.base_url}/users/auth?id=${id}&token=${token}`
      );
      if (data.status === true) {
        return data.data;
      } else {
        toast.error("Something Went Error");
        return {};
      }
    } catch (error) {
      toast.error("Something Went Error");
      return {};
    }
  }
  async DeleteUser(id) {
    try {
      const { data } = await axios.post(
        `${this.base_url}/users/auth/delete`,
        { id },
        { headers: this.headers }
      );
      if (data.status === true) {
        this.Logout(false);
      } else {
        toast.error("Something Went Error");
        return null;
      }
    } catch (error) {
      toast.error("Something Went Error");
      return null;
    }
  }


  async Logout(relogin=true) {
    try {
        removeCookies('password'); 
        removeCookies('id'); 
        removeCookies('user'); 
        if (relogin)
            await AuthenticationProtocol()
        window.location.href ="/"
    } catch (error) {
      toast.error("Something Went Error");
      return {};
    }
  }
}

export default TempifyAPI;
