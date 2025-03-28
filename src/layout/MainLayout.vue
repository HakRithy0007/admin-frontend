<script lang="ts">
export const iframeHeight = '800px'
export const description = 'A sidebar with collapsible sections.'
</script>

<script setup lang="ts">
import AppSidebar from '../../src/components/AppSidebar.vue'
import Header from '../../src/components/Header.vue'
import {
  SidebarInset,
  SidebarProvider,
} from '../components/ui/sidebar'
</script>

<template>
 <div class="h-[100vh] w-full">
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <div class="header">
          <Header />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </SidebarInset>

  </SidebarProvider>
 </div>
</template>
