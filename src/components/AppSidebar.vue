<script setup lang="ts">
import SearchForm from '../components/SearchForm.vue'
import VersionSwitcher from '../components/VersionSwitcher.vue'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  type SidebarProps,
  SidebarRail,
} from '@/components/ui/sidebar'
import { ChevronRight } from 'lucide-vue-next'

const props = defineProps<SidebarProps>()

// This is sample data.
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'User',
      url: '#',
      items: [
        {
          title: '',
          url: '#',
        },
      ],
    },
    {
      title: 'Inventory',
      url: '#',
      items: [
        {
          title: '',
          url: '#',
          isActive: true,
        },
        {
          title: '',
          url: '#',
        },
      ],
    },
    {
      title: 'Order',
      url: '#',
      items: [
        {
          title: '',
          url: '#',
        },
      ],
    },
    {
      title: 'Products',
      url: '#',
      items: [
        {
          title: '',
          url: '#',
        },
      ],
    },
    {
      title: 'Report',
      url: '#',
      items: [
        {
          title: '',
          url: '#',
        },
      ],
    },
    {
      title: 'Review',
      url: '#',
      items: [
        {
          title: '',
          url: '#',
        },
      ],
    },
    {
      title: 'Setting',
      url: '#',
      items: [
        {
          title: '',
          url: '#',
        },
      ],
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <VersionSwitcher
        :versions="data.versions"
        :default-version="data.versions[0]"
      />
      <SearchForm />
    </SidebarHeader>
    <SidebarContent class="gap-0">
      <Collapsible
        v-for="item in data.navMain"
        :key="item.title"
        :title="item.title"
        default-open
        class="group/collapsible"
      >
        <SidebarGroup>
          <SidebarGroupLabel
            as-child
            class="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <CollapsibleTrigger>
              {{ item.title }}
              <ChevronRight class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="childItem in item.items" :key="childItem.title">
                  <SidebarMenuButton as-child :is-active="childItem.isActive">
                    <a :href="item.url">{{ childItem.title }}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
