
import LoginView from "../view/LoginView.vue";
import MainView from "../view/MainView.vue";
import NotFoundView from "../view/NotFoundView.vue";

const routes = [
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
