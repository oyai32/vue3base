import { createRouter, createWebHistory } from 'vue-router';
const Layout = () => import("@/layout/index.vue");

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      { path: '/dashboard', component: () => import('@/views/dashboard.vue') },
      // { path: '/about', component: () => import('@/views/about.vue') },
      // { path: '/user', component: () => import('@/views/user.vue') },
      // { path: '/user/:id', component: () => import('@/views/user.vue') },
      // { path: '/user/:id/edit', component: () => import('@/views/user.vue') },
    ],
  },
  // { path: '/', component: () => import('@/views/dashboard.vue') },
  { path: '/login', component: () => import('@/views/login.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
