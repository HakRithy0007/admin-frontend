<template>
      <h1 class="text-2xl font-semibold mb-6">Settings</h1>
  
      <!-- General Settings -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-700">General Settings</h2>
        <div class="space-y-4 mt-4">
          <!-- Store Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Store Name</label>
            <input
              type="text"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter store name"
            />
          </div>
          <!-- Store Logo -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Store Logo</label>
            <input
              type="file"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
      </div>
  
      <!-- User Preferences -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-700">User Preferences</h2>
        <div class="space-y-4 mt-4">
          <!-- Theme Selection -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Theme</label>
            <select
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <!-- Notifications -->
          <div class="flex items-center">
            <label class="block text-sm font-medium text-gray-700 mr-4">Email Notifications</label>
            <input
              type="checkbox"
              class="h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
  
      <!-- Account Settings -->
      <div>
        <h2 class="text-xl font-semibold text-gray-700">Account Settings</h2>
        <div class="space-y-4 mt-4">
          <!-- Change Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Change Password</label>
            <input
              type="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter new password"
            />
          </div>
          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Confirm new password"
            />
          </div>
          <button
            class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      </div>
  </template>
  
<script setup lang="ts">

</script>

<style scoped>

</style>