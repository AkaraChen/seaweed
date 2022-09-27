import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './page/index.vue';

const routes: RouteRecordRaw[] = [{ path: '/', component: Index }];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;
