<template>
    <div>
      <h1 class="text-2xl font-bold">Products</h1>
      <table class="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="p-2 border border-gray-300">Product Name</th>
            <th class="p-2 border border-gray-300">Price</th>
            <th class="p-2 border border-gray-300">Stock</th>
            <th class="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t">
            <td class="p-2 border border-gray-300">MacBook Pro</td>
            <td class="p-2 border border-gray-300">$1999</td>
            <td class="p-2 border border-gray-300">10</td>
            <td class="p-2 border border-gray-300">
              <button class="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
              <button class="bg-red-500 text-white px-3 py-1 rounded ml-2">Delete</button>
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