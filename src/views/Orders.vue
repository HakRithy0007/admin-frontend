<template>
      <h1 class="text-2xl font-semibold mb-4">Orders</h1>
  
      <!-- Search Bar -->
      <div class="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search orders..."
          class="border border-gray-300 rounded-lg px-4 py-2 w-1/3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Orders
        </button>
      </div>
  
      <!-- Orders Table -->
      <div class="overflow-x-auto bg-white shadow-md rounded-lg">
        <table class="min-w-full border-collapse">
          <thead class="bg-gray-200">
            <tr>
              <th class="p-3 text-left">Order ID</th>
              <th class="p-3 text-left">Customer Name</th>
              <th class="p-3 text-left">Date</th>
              <th class="p-3 text-left">Status</th>
              <th class="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="p-3">ORD001</td>
              <td class="p-3">John Doe</td>
              <td class="p-3">2025-03-28</td>
              <td class="p-3">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </td>
              <td class="p-3 text-center">
                <button class="text-blue-600 hover:underline mr-2">View</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr class="border-t">
              <td class="p-3">ORD002</td>
              <td class="p-3">Jane Smith</td>
              <td class="p-3">2025-03-27</td>
              <td class="p-3">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  Shipped
                </span>
              </td>
              <td class="p-3 text-center">
                <button class="text-blue-600 hover:underline mr-2">View</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr class="border-t">
              <td class="p-3">ORD003</td>
              <td class="p-3">Michael Brown</td>
              <td class="p-3">2025-03-26</td>
              <td class="p-3">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                  Cancelled
                </span>
              </td>
              <td class="p-3 text-center">
                <button class="text-blue-600 hover:underline mr-2">View</button>
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