import { setCookies } from "cookies-next";

const Cookier = (token,id, password) => {
    setCookies("user", token);
    setCookies("id", id);
    setCookies("password", password);
}
export default Cookier