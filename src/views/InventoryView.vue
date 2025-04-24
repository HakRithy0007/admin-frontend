<template>

      <div class="flex flex-col h-[calc(100vh-92px)]">

        <!-- Header content -->
         <div class="flex justify-between items-center md:flex-row md:justify-between py-1 sticky top-[-2px] z-100 gap-3 h-[40px] mb-4 md:mb-1">
          <div class="input">
              <input type="text" placeholder="Search products..." class="rounded-md border-[1px] border-gray-200 px-4 w-[200px] h-[40px] md:w-[250px] outline-none"/>
          </div>
          <div class="add-product-btn">
            <Button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 h-[40px]">+ Add Product</Button>
          </div>
         </div>

         <!-- Table section -->
          <div class="table-section flex-grow relative overflow-hidden mt-2">
            <div class="w-full h-full overflow-y-auto">
              <table class="table w-[600px] md:w-full border-[1px] border-gray-200 border-collapse">
                <thead class="bg-gray-200 sticky top-[-2px] z-10">
                  <tr>
                    <th v-for="header in tableHeaders" :key="header.key" class="table-header border-[1px] text-center text-nowrap text-gray-600 border-gray-200 p-2 ">
                      <div class="flex justify-center items-center gap-2">
                        <span>{{ header.label  }}</span>
                        <span> <span><Icon v-if="header.icon" :icon="header.icon"  /></span></span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(inventory, index) in inventories" :key="index">
                      <td
                        v-for="header in tableHeaders"
                        :key="header.key"
                        class="table-data text-center border text-nowrap border-gray-300 p-2"
                      >
                        {{ inventory[header.key as keyof Inventory] }}
                      </td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>

          <!-- Pagination -->
           <div class="pagination flex items-center justify-center bottom-0 sticky border-t border-gray-300">
            <Pagination :active-page="activePage" :total="totalData" :item-per-page="perPageData"/>
           </div>

      </div>

      
  </template>
  

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import Pagination from "@/components/Pagination.vue";
import { Icon } from '@iconify/vue';
import { ref } from "vue";
import { type Inventory } from "@/types/inventory";

const activePage = ref(1)
const totalData = ref(0)
const perPageData = (10)

const inventories: Inventory[] = [
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },
  {
    product_name: 'Laptop',
    quantity: 2,
    price: 10,
    description: 'hi',
    actions: 'bought'
  },

]

const tableHeaders = [
  { label: 'Product Name', key: 'product_name', icon: 'icon-park-outline:edit-name' },
  { label: 'Quantity', key: 'quantity', icon: 'material-symbols:production-quantity-limits' },
  { label: 'Price', key: 'price', icon: 'material-symbols-light:money-rounded' },
  { label: 'Description', key: 'description', icon: 'material-symbols-light:money-rounded' },
  { label: 'Actions', key: 'actions', icon: 'icon-park-outline:transaction' },
];


</script>

<style scoped>

</style>