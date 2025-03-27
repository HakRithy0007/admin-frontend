import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MainLayout from '@/layout/MainLayout.vue';
import LoginView from '../views/LoginView.vue'; 
import UserView from '@/views/UserView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/dashboard', 
    component: MainLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'user',
        name: 'user',
        component: UserView,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
