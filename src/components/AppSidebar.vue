<script setup lang="ts">
import { ref } from 'vue'
import SearchForm from '../components/SearchForm.vue'
import VersionSwitcher from '../components/VersionSwitcher.vue'
import { Icon } from "@iconify/vue";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  type SidebarProps,
  SidebarRail,
} from '@/components/ui/sidebar'

const props = defineProps<SidebarProps>()

// This is sample data.
const data = {
  navMain: [
  { title: 'Users', url: '#', icon: 'mdi:user' },
    { title: 'Inventory', url: '#', icon: 'mdi:package' },
    { title: 'Order', url: '#', icon: 'mdi:cart' },
    { title: 'Products', url: '#', icon: 'mdi:store' },
    { title: 'Report', url: '#', icon: 'mdi:chart-line' },
    { title: 'Review', url: '#', icon: 'mdi:star' },
    { title: 'Setting', url: '#', icon: 'mdi:settings' }
  ]
}

// Reactive variable to track the active menu item
const activeItem = ref<string | null>(null)

function setActiveItem(itemTitle: string) {
  activeItem.value = itemTitle
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarContent class="gap-0">
      <div class="h-[64px] flex justify-center items-center">HI</div>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in data.navMain" :key="item.title" class="px-2">
          <SidebarMenuButton :class="{   'bg-blue-500 hover:bg-blue-500 hover:text-white  text-white': activeItem === item.title,  'bg-transparent text-black': activeItem !== item.title  }" @click="setActiveItem(item.title)" class="text-center flex justify-start items-center pl-8 py-6">
            <Icon :icon="item.icon" class="mr-4" width="1.6em" height="1.6em"/>
            <a :href="item.url" class="text-[1rem] font-bold font-kulen">{{ item.title }}</a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>

<style scoped>
/* Optional: Add transition for smooth background change */
.sidebar-menu-button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
