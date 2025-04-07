<template>
      <h1 class="text-2xl font-semibold mb-4">Reviews</h1>
  
      <!-- Search Bar -->
      <div class="mb-4 flex justify-between">
        <input type="text" placeholder="Search reviews..." class="border border-gray-300 roundedpx-4 py-2 w-1/3 focus:ring-2 focus:ring-blue-500 outline-none" />
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add Review</button>
      </div>
      <!-- Reviews Tables -->
      <div class="overflow-x-auto bg-white shadow-md rounded">
        <table class="min-w-full border-collapse">
          <thead class="bg-gray-200">
            
            <tr>
              <th class="p-3 text-center text-nowrap">Review ID</th>
              <th class="p-3 text-center text-nowrap">Product Name</th>
              <th class="p-3 text-center text-nowrap">Customer Name</th>
              <th class="p-3 text-center text-nowrap">Rating</th>
              <th class="p-3 text-center text-nowrap">Review Text</th>
              <th class="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr class="border-t">
              <td class="p-3">REV001</td>
              <td class="p-3">iPhone 13</td>
              <td class="p-3">John Doe</td>
              <td class="p-3">
                <span class="text-yellow-400">★★★★☆</span>
              </td>
              <td class="p-3">Great phone, fast performance, but battery life could be better.</td>
              <td class="p-3 text-center">
                <button class="text-nowrap text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-nowrap text-red-600 hover:underline">Delete</button>
              </td>
            </tr>

            <tr class="border-t">
              <td class="p-3">REV002</td>
              <td class="p-3">Samsung Galaxy S21</td>
              <td class="p-3">Jane Smith</td>
              <td class="p-3">
                <span class="text-yellow-400">★★★★★</span>
              </td>
              <td class="p-3">Amazing display and camera quality, the performance is top-notch!</td>
              <td class="p-3 text-center">
                <button class="text-nowrap text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-nowrap text-red-600 hover:underline">Delete</button>
              </td>
            </tr>

            <tr class="border-t">
              <td class="p-3">REV003</td>
              <td class="p-3">MacBook Pro 16"</td>
              <td class="p-3">Michael Brown</td>
              <td class="p-3">
                <span class="text-yellow-400">★★★☆☆</span>
              </td>
              <td class="p-3">Great build quality but too expensive for what it offers.</td>
              <td class="p-3 text-center">
                <button class="text-nowrap text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-nowrap text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </template>

