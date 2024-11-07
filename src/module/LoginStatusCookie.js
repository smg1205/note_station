import Cookies from "js-cookie";

function getLoginStatus() {
    return Cookies.get("loginStatus") === "YYYY";
}

function Login() {
    Cookies.set("loginStatus", JSON.stringify("YYYY"), {expires: 1});
}

function Logout() {
    Cookies.remove("loginStatus");
}

export { getLoginStatus, Login, Logout };