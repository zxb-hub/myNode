import { createRouter,createWebHashHistory} from "vue-router";

const Login = () => import('../view/login/index')

const routes = [
    {
        path: "/",
        component: Login
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})