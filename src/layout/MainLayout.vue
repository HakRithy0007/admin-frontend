<template>
  <div class="flex h-[100vh] overflow-hidden">
    <!-- Sidebar -->
    <Sidebar :isSidebarOpen="isSidebarOpen" />

    <!-- Main Content -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <Header :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 h-full">
        <router-view></router-view>
      </main>
    </div>

    <!-- Overlay for mobile sidebar -->
    <div v-if="isSidebarOpen" @click="toggleSidebar" class="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

</script>
