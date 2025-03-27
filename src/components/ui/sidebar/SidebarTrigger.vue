<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSidebar } from './utils'
import { Icon } from "@iconify/vue";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>

  <Button class="bg-[#606060]" size="icon"  :class="cn('h-7 w-7', props.class)"
  @click="toggleSidebar"><Icon icon="line-md:close-to-menu-transition" width="1.2em" height="1.2em" /></Button>
</template>
