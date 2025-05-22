<script setup>
import SearchBar from "~/components/layout/sidebar/SearchBar.vue";
import SideBarHeader from "~/components/layout/sidebar/SideBarHeader.vue";
import SideBarRoutes from "~/components/layout/sidebar/Routes.vue";

</script>

<template>
  <nav class="hidden sm:flex md:flex w-20 md:w-72 bg-white flex-col md:min-h-screen shadow-lg border-gray-200 transition-all duration-300">
    <SideBarHeader />
    <SearchBar  class="sidebar-item"/>
    <SideBarRoutes class="sidebar-item" />
  </nav>
</template>
