<script setup>
const props = defineProps({
  cardData: {
    required: true,
  },
});
</script>

<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <div class="text-sm text-gray-500 mb-2">{{ cardData.title }}</div>
    <div class="mb-2">{{ cardData.value }}</div>
    <div class="flex items-center" v-if="cardData.status === 'possitive'">
      <img src="/icons/rise.png" alt="" class="w-4 h-4 mr-2" />
      <span class="text-sm text-rise">
        {{ `+${cardData.lastValue}% ` }}
      </span>
    </div>
    <div class="flex items-center" v-if="cardData.status === 'negative'">
      <img src="/icons/drop.png" alt="" class="w-4 h-4 mr-2" />
      <span class="text-sm text-drop">
        {{ `-${cardData.lastValue}% ` }}
      </span>
    </div>
  </div>
</template>
