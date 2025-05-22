<template>
  <div class="flex items-center justify-between mt-2 text-sm">
    <div>
      Showing {{ startItem }}-{{ endItem }} from {{ totalItems }} data
    </div>
    <div class="flex gap-1">
      <button
        class="px-2 py-1   text-gray-400 hover:bg-gray-100 disabled:opacity-50"
        :disabled="page === 1"
        @click="$emit('changePage', page - 1)"
      >
      <img src="/icons/left.png" />
      </button>
      <button
        v-for="n in totalPages"
        :key="n"
        class="cursor-pointer px-2 py-1 rounded border text-gray-400 hover:bg-gray-100"
        :class="{ 'bg-active text-white border-active': n === page }"
        @click="$emit('changePage', n)"
      >
        {{ n }}
      </button>
      <button
        class="px-2 py-1   text-gray-400 hover:bg-gray-100 disabled:opacity-50"
        :disabled="page === totalPages"
        @click="$emit('changePage', page + 1)"
      >
    <img src="/icons/right.png" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  startItem: Number,
  endItem: Number,
  totalItems: Number,
  page: Number,
  totalPages: Number
});
defineEmits(['changePage']);
</script> 