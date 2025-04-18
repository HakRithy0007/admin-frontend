<template>
    <header class="h-[60px] bg-white shadow-md  flex justify-between items-center pr-4 pl-4">
      
      <!-- Mobile Sidebar Toggle -->
      <button @click="toggleSidebar" class="lg:hidden focus:outline-none">
        <Icon v-if="!isSidebarOpen" icon="mi:menu" width="1.6em" height="1.6em" />
        <Icon v-else icon="mi:menu" width="1.6em" height="1.6em" />
      </button>

      <!-- Header Content -->
      <div class="flex-1 ml-4">
        <h2 class="text-xl font-semibold">Hi, Admin</h2>
      </div>
  
      <!-- Header Actions -->
      <div class="flex items-center space-x-4">
        <button class="text-gray-600 hover:text-gray-800">
          <Icon icon="iconamoon:notification" width="1.2em" height="1.2em" />
        </button>
        <button class="text-gray-600 hover:text-gray-800">
          <Icon icon="lets-icons:setting-line" width="1.2em" height="1.2em" />
        </button>
      </div>
    </header>
  </template>
  
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import { Icon } from "@iconify/vue";
  
  defineProps<{ isSidebarOpen: boolean }>();
  const emit = defineEmits(['toggle-sidebar']);
  
  const toggleSidebar = () => {
    emit('toggle-sidebar');
  };
  </script>
  