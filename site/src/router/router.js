import AddUser from "@/pages/AddUser.vue";
import Main from "@/pages/main.vue";
import Settings from "@/pages/Settings.vue";
import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";
import { createWebHistory,createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/AddUser',
        component: AddUser
    },
    {
        path: '/Settings',
        component: Settings
    }, 
    {
        path: '/SignIn',
        component: SignIn
    },
    {
        path: '/SignUp',
        component: SignUp
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;