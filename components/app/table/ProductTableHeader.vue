<template>
  <div class="flex items-center justify-between mb-4 overflow-auto">
    <div class="font-bold hidden lg:block">All products</div>
    <div class="flex items-center gap-2">
      <div class="flex items-center border border-gray-100 rounded-lg p-2 lg:w-68 w:18">
        <img
          src="/icons/SearchIcon.png"
          alt=""
          class="mr-2 w-5 h-5 md:w-5 md:h-5"
        />
        <input
          type="text"
          placeholder="Search item.."
          class="w-full text-sm text-gray-400 outline-none bg-transparent hidden lg:block"
        />
      </div>
      <div
        class="cursor-pointer border px-3 py-2 rounded border-gray-200 h-10 w-10  items-center justify-center hidden lg:flex"
      >
        <img src="/icons/refresh.png" />
      </div>
      <div
        class="cursor-pointer border px-3 py-2 rounded border-gray-200 h-10 w-10 hidden lg:flex items-center justify-center"
      >
        <img src="/icons/date.png" />
      </div>
      <div
        class="cursor-pointer border px-3 py-2 rounded border-gray-200 h-10 w-10 hidden lg:flex items-center justify-center"
      >
        <img src="/icons/sort.png" />
      </div>
      <div
        class="cursor-pointer border px-3 py-2 rounded border-gray-200 h-10 w-10 flex items-center justify-center"
      >
        <img src="/icons/filter.png" />
      </div>
      <button
        class="text-sm flex items-center justify-center bg-active text-white px-4 py-2 rounded-lg cursor-pointer"
      >
        <img class="mr-2 w-4 h-4" src="/icons/add.png" />
        Add New Product
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  search: String,
});
</script>
