import Cookies from "js-cookie";

// 获取登录状态
function getLoginStatus() {
    const loginStatus = Cookies.get("loginStatus");
    return loginStatus === 'YES'; // 如果 loginStatus 为 'YES' 返回 true
}

// 设置登录状态
function Login() {
    Cookies.set("loginStatus", "YES", { expires: 1 }); // 设置 cookie 并设置过期时间为 1 天
}

// 设置登出状态
function Logout() {
    Cookies.remove("loginStatus"); // 移除 loginStatus cookie
}

export { getLoginStatus, Login, Logout };
