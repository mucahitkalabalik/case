<template>
  <div
    :class="[
      'flex items-center gap-1 px-2 py-2 rounded-md min-w-[100px] ',
      status === true || status === 'completed'
        ? 'bg-[#8ddb3a3a] text-[#8ddb3a88]'
        : status === false || status === 'canceled'
        ? 'bg-[#f2727641]  text-[#f2727677]'
        : 'bg-gray-300  text-gray-700',
    ]"
    style="width: fit-content"
  >
    <img
      v-if="status === true || status === 'completed'"
      src="/icons/completed.png"
      alt="Completed"
      class="w-4 h-4"
    />
    <img
      v-else-if="status === false || status === 'canceled'"
      src="/icons/canceled.png"
      alt="Canceled"
      class="w-4 h-4"
    />
    <img v-else src="/icons/pending.png" alt="Pending" class="w-4 h-4" />
    <span
      :class="{
        'text-green-700': status === true || status === 'completed',
        'text-red-700': status === false || status === 'canceled',
        'text-yellow-600': status === 'pending',
      }"
      class="text-xs ml-1"
      >{{ statusText }}</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  status: {
    type: [Boolean, String],
    required: true,
  },
});

const statusText = computed(() => {
  if (props.status === true || props.status === "completed") return "Completed";
  if (props.status === false || props.status === "canceled") return "Canceled";
  return "Pending";
});
</script>
