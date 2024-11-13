import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes.js";
import {getLoginStatus} from "@/module/LoginStatusCookie.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    if(to.meta.requiresAuth && !getLoginStatus()) {
        return{
            path:"/login",
        }
    }
    if(to.path === '/login' && getLoginStatus()){
        return{
            path: "/",
        }
    }
})

export default router;