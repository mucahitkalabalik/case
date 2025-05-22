<script setup>
import Header from "~/components/layout/Header.vue";
import Sidebar from "~/components/layout/sidebar/Sidebar.vue";
</script>

<template>
  <div class="flex min-h-screen bg-custom-bg">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-auto px-10">
      <Header />
      <main class="flex-1 p-6">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
