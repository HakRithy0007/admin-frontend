import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import MainLayout from '@/layout/MainLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'home', 
        name: 'home',
        component: HomeView
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
