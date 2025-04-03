<template>
  <aside :class="[ 'fixed lg:static z-40 transform transition-transform duration-600 ease-in-out', isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0', 'w-64 bg-gray-800 text-white h-full' ]"
  >
    <div class="p-4">
      <h1 class="text-xl font-bold mb-6 p-2">ADMIN DASHBOARD</h1>
      <nav>
        <ul>
          <li v-for="item in navItems" :key="item.to" class="mb-2">
            <router-link :to="item.to" class="block py-3 px-6 transition-colors rounded-lg my-4" :class="{ 'bg-blue-500': route.path === item.to }" >
              <div class="flex items-center">
                <Icon :icon="item.icon" class="mr-2" width="1.2em" height="1.2em" />
                <span class="text-[16px]">{{ item.label }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

defineProps<{ isSidebarOpen: boolean }>();
const route = useRoute();

const navItems = [
  { to: '/dashboard/home', label: 'Dashboard', icon: 'material-symbols:dashboard-outline-rounded' },
  { to: '/dashboard/customeraudit', label: 'Customer Audit', icon: 'lets-icons:user' },
  { to: '/dashboard/inventory', label: 'Inventory', icon: 'material-symbols:inventory-2-outline-rounded' },
  { to: '/dashboard/products', label: 'Products', icon: 'material-symbols:shopping-cart-outline' },
  { to: '/dashboard/orders', label: 'Orders', icon: 'material-symbols:receipt-outline' },
  { to: '/dashboard/customers', label: 'Customers', icon: 'bi:people' },
  { to: '/dashboard/reviews', label: 'Reviews', icon: 'material-symbols:rate-review-outline' },
  { to: '/dashboard/settings', label: 'Settings', icon: 'material-symbols:settings-outline' }
];
</script>