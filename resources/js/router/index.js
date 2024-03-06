import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import App from "../views/App.vue";


const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;