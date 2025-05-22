<script setup>
import SearchIcon from "/icons/SearchIcon.png";
</script>

<template>
  <div class=" flex border-1 border-gray-100 rounded-lg m-6 p-2 ">
    <img :src="SearchIcon" alt="" srcset="" class="mr-2">
    <input
      type="text"
      placeholder="Search here"
      class="w-full text-gray-500  outline-none "
    />
  </div>
</template>
