import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: 'default',
        },
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/city/:id',
        name: 'CityDetails',
        meta: {
            layout: 'default',
        },
        component: () => import('@/views/CityDetails.vue'),
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        meta: {
            layout: "error",
        },
        component: () => import("@/layout/LError.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router