<script lang="ts">
    export const iframeHeight = '800px'
    export const description = 'A sidebar with collapsible sections.'
</script>
<script setup lang="ts">
import AppSidebar from '../components/AppSidebar.vue'
import { SidebarInset, SidebarProvider, SidebarTrigger} from '../components/ui/sidebar'
</script>
<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <div class="flex flex-1 flex-col gap-4 p-4">
        <router-view></router-view>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>