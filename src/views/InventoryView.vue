<template>
      <!-- <div class="mb-4 flex justify-between">
        <input type="text" placeholder="Search products..." class="border border-gray-300 rounded px-4 py-2 w-1/3 focus:ring-2 focus:ring-blue-500 outline-none"/>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">+ Add Product</button>
      </div>
  
      <div class="overflow-x-auto bg-white shadow-md rounded">
        <table class="min-w-full border-collapse">
          <thead class="bg-gray-200">
            <tr>
              <th class="p-3 text-left">Product Name</th>
              <th class="p-3 text-left">Quantity</th>
              <th class="p-3 text-left">Price</th>
              <th class="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="p-3">iPhone 13</td>
              <td class="p-3">50</td>
              <td class="p-3">$799</td>
              <td class="p-3 text-center">
                <button class="text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr class="border-t">
              <td class="p-3">Samsung Galaxy S21</td>
              <td class="p-3">30</td>
              <td class="p-3">$699</td>
              <td class="p-3 text-center">
                <button class="text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr class="border-t">
              <td class="p-3">MacBook Pro 16"</td>
              <td class="p-3">20</td>
              <td class="p-3">$2499</td>
              <td class="p-3 text-center">
                <button class="text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->


      <div class="flex flex-col h-[calc(100vh-92px)]">

        <!-- Header content -->
         <div class="flex justify-between items-center md:flex-row md:justify-between py-1 sticky top-[-2px] z-100 gap-3 h-[40px] mb-8 md:mb-1">
          <div class="input">
              <input type="text" placeholder="Search products..." class="rounded-md border-[1px] border-gray-200 px-4 w-[200px] h-[40px] md:w-[250px] outline-none"/>
          </div>
          <div class="add-product-btn">
            <Button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 h-[40px]">+ Add Product</Button>
          </div>
         </div>


         
      </div>

      
  </template>
  

<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<style scoped>

</style>