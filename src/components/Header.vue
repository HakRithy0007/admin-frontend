<template>
   <header class="flex sticky top-0 bg-background h-14 shrink-0 items-center gap-2 border-b px-6">
     <div class="flex justify-between items-center w-full">
      <div class="left-side flex justify-center items-center">
        <SidebarTrigger class="-ml-1" />
      </div>
      <div class="right-side">
        <Avatar class="w-[45px] h-[45px]">
          <AvatarImage src="/src/assets/images/profile/pf1.png" alt="pf1" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
     </div>
      </header>
</template>

<script setup lang="ts">
import { SidebarTrigger } from '../../src/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '../../src/components/ui/avatar'
</script>