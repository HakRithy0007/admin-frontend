<template>
    <div class="pagination h-[50px] flex justify-center items-center p-1">
      <Pagination v-slot="{ page }" :total="total" :sibling-count="1" show-edges :page="activePage" :default-page="activePage" @update:page="handleChangePage" :items-per-page="itemPerPage">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <!-- <PaginationFirst /> -->
          <PaginationPrev class="hidden sm:flex sm:items-center" />
  
          <!-- paginations -->
          <template v-for="(item, index) in items">
            <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button class="w-9 h-9 p-0 hover:bg-blue-300" :class="item.value === page ? 'bg-blue-500 hover:bg-blue-600' : 'border-none bg-blue-600 text-black'">
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" class="text-[#369bda]" />
          </template>
  
          <PaginationNext class="hidden sm:flex sm:items-center" />
          <!-- <PaginationLast /> -->
        </PaginationList>
      </Pagination>
    </div>
  </template>
  
  <script setup lang="ts">
  import {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
  } from "../components/ui/pagination";
  import { Button } from "../components/ui/button";
  
  const emit = defineEmits(["clickPage"]);
  
  function handleChangePage(page: number) {
    emit("clickPage", page);
  }

  defineProps<{
    total?: number;
    activePage?: number;
    itemPerPage: number;
  }>();
  </script>