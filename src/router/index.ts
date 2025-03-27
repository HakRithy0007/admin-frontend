import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/index.vue';
import MainLayout from '@/layout/MainLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'home', 
        name: 'home',
        component: Home
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
