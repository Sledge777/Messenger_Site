import Main from "@/pages/main.vue";
import { createWebHistory,createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;