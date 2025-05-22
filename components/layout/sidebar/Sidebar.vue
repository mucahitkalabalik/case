<script setup>
import SearchBar from "~/components/layout/sidebar/SearchBar.vue";
import SideBarHeader from "~/components/layout/sidebar/SideBarHeader.vue";
import SideBarRoutes from "~/components/layout/sidebar/SideBarRoutes.vue";

</script>

<template>
  <nav class="w-70 bg-white flex flex-col min-h-screen shadow-lg  border-gray-200">
    <SideBarHeader />
    <SearchBar />
    <SideBarRoutes />
  </nav>
</template>
