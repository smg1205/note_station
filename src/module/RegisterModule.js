import axios from 'axios';
import { setToken } from "@/module/TokenModule.js";
import {Login} from "@/module/LoginStatusCookie.js";
import {ElNotification} from "element-plus";
import routers from "@/router/routers.js";

async function RegisterModule(username, password, email, checkPassword) {
    try {
        const response = await axios.post("http://localhost:8088/auth/register", {
            username: username,
            password: password,
            email: email,
            checkPassword: checkPassword
        });
        /**
         * {
         *     "email" : "3486104707@163.com",
         *     "username" : "admin",
         *     "password" : "admin",
         *     "checkPassword" : "admin"
         * }
         */

        const data = response.data;

        if (data.token) {
            setToken(data.token);
        } else {
            console.error("Token not found in response");
        }
        if(data.resMsg === "注册成功，即将跳转到主页"){
            Login();
            await routers.push("/main/upload")
        }
        ElNotification({
            title: 'Info',
            message: data.resMsg,
            type: 'info',
        })
    } catch (error) {
        console.error("Register failed:", error);
        throw error; // Rethrow the error for handling in the calling code
    }
}

export { RegisterModule };
