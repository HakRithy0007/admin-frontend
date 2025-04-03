<template>
      <h1 class="text-2xl font-semibold mb-4">Inventory</h1>
  
      <!-- Search Bar -->
      <div class="mb-4 flex justify-between">
        <input type="text" placeholder="Search products..." class="border border-gray-300 rounded px-4 py-2 w-1/3 focus:ring-2 focus:ring-blue-500 outline-none"/>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">+ Add Product</button>
      </div>
  
      <!-- Inventory Table -->
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
      </div>
  </template>
  

<script setup lang="ts">

</script>

<style scoped>

</style>