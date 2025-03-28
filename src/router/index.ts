import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MainLayout from '@/layout/MainLayout.vue';
import LoginView from '../views/LoginView.vue'; 
import CustomerAudit from '@/views/CustomerAudit.vue';
import InventoryView from '@/views/InventoryView.vue';

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
        path: 'customeraudit',
        name: 'customeraudit',
        component: CustomerAudit,
      },
      {
        path: 'inventory',
        name: 'inventory',
        component: InventoryView,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
