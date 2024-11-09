import LoginView from "@/view/LoginView.vue";
import MainView from "@/view/MainView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import UploadCom from "@/components/UploadCom.vue";
import UserCenCom from "@/components/UserCenCom.vue";
import IndexView from "@/view/IndexView.vue";

const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/main',
        name: 'Main',
        component: MainView ,
        children:[
            {
                path: '/main/upload',
                name: 'Upload',
                component: UploadCom,

            },
            {
                path: '/main/user',
                name: 'user',
                component: UserCenCom,
            }
        ]
    },
    {
        path: '/register',
        redirect: '/login',
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundView',
        component: NotFoundView
    }
]

export {routes}
