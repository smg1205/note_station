import axios from 'axios';
import { setToken } from "@/module/TokenModule.js";
import {Login} from "@/module/LoginStatusCookie.js";
import {ElNotification} from "element-plus";
import routers from "@/router/routers.js";

async function LoginModule(username, password) {
    try {
        const response = await axios.post("http://localhost:8088/auth/login", {
            username: username,
            password: password
        });

        // Assuming the response data has the structure { token: '...', resMsg: '...' }
        const data = response.data;

        if (data.token) {
            setToken(data.token);
        } else {
            console.error("Token not found in response");
        }
        if(data.resMsg === "登录成功，即将跳转到主页"){
            Login();
            routers.push("/main/upload")
        }
        ElNotification({
            title: 'Info',
            message: data.resMsg,
            type: 'info',
        })
    } catch (error) {
        console.error("Login failed:", error);
        throw error; // Rethrow the error for handling in the calling code
    }
}

export { LoginModule };
