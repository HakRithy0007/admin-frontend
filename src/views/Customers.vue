<template>
      <h1 class="text-2xl font-semibold mb-4">Customers</h1>
  
      <!-- Search Bar -->
      <div class="mb-6 flex justify-between">
        <input
          type="text"
          placeholder="Search customers..."
          class="border border-gray-300 rounded px-4 py-2 w-1/3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Customer
        </button>
      </div>
      
  
      <!-- Customers Table -->
      <div class="overflow-x-auto bg-white shadow-md">
        <table class="min-w-full border-collapse">
          <thead class="bg-gray-200">
            <tr>
              <th class="p-3 text-left">Name</th>
              <th class="p-3 text-left">Email</th>
              <th class="p-3 text-left">Status</th>
              <th class="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="p-3 text-nowrap">John Doe</td>
              <td class="p-3 text-nowrap">john@example.com</td>
              <td class="p-3 text-nowrap">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  Active
                </span>
              </td>
              <td class="p-3 text-center text-nowrap">
                <button class="text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr class="border-t">
              <td class="p-3 text-nowrap">Jane Smith</td>
              <td class="p-3 text-nowrap">jane@example.com</td>
              <td class="p-3 text-nowrap">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                  Inactive
                </span>
              </td>
              <td class="p-3 text-center">
                <button class="text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr class="border-t">
              <td class="p-3 text-nowrap">Michael Brown</td>
              <td class="p-3 text-nowrap">michael@example.com</td>
              <td class="p-3 text-nowrap">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  Active
                </span>
              </td>
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