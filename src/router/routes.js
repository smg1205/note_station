import LoginView from "@/view/LoginView.vue";
import MainView from "@/view/MainView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import UploadCom from "@/components/UploadCom.vue";
import UserCenCom from "@/components/UserCenCom.vue";
import IndexView from "@/view/IndexView.vue";
import PreView from "@/view/PreView.vue";

const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexView,
        meta: { requiresAuth: false },
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        meta: { requiresAuth: false },
    },
    {
        path: '/main',
        name: 'Main',
        component: MainView ,
        isHidden: true,
        children:[
            {
                path: '/main/upload',
                name: 'Upload',
                component: UploadCom,
                meta:{requiresAuth: true},
            },
            {
                path: '/main/user',
                name: 'User',
                component: UserCenCom,
                meta:{requiresAuth: true},
            },
            {
                path: '/main/preview/:uuid/:fileName',
                name: 'Preview',
                props: true,
                component: PreView,
                meta:{requiresAuth: true},
            }
        ]
    },
    {
        path: '/register',
        redirect: '/login',
        meta: { requiresAuth: false },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundView',
        component: NotFoundView,
        meta: { requiresAuth: false },
    }
]

export {routes}
