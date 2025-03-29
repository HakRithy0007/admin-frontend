import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';
import CustomerAudit from '@/views/CustomerAudit.vue';
import InventoryView from '@/views/InventoryView.vue';
import Products from '@/views/Products.vue';
import Orders from '@/views/Orders.vue';
import Customers from '@/views/Customers.vue';
import Reviews from '@/views/Reviews.vue';
import Settings from '@/views/Settings.vue';

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
      {
        path: 'products',
        name: 'products',
        component: Products,
      },
      {
        path: 'orders',
        name: 'orders',
        component: Orders,
      },
      {
        path: 'customers',
        name: 'customers',
        component: Customers,
      },
      {
        path: 'reviews',
        name: 'reviews',
        component: Reviews,
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
