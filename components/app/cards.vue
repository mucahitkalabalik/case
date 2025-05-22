<script setup>
import Data from "~/utils/cardData.js";
import card from "~/components/app/card.vue";
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    <card
      v-for="(item, index) in Data"
      :key="index"
      :cardData="item"
    />
  </div>
</template>
