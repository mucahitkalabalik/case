<template>
  <div class="overflow-x-auto rounded-lg shadow">
    <table class="min-w-full bg-white">
      <thead>
        <tr class="text-gray-400 text-left">
          <th class="p-4">
            <input
              type="checkbox"
              class="w-5 h-5"
              :checked="selectAll"
              @change="$emit('toggleAll', $event.target.checked)"
            />
          </th>
          <th class="p-4">Product Name</th>
          <th class="p-4">Transaction ID</th>
          <th class="p-4">Date</th>
          <th class="p-4">Amount</th>
          <th class="p-4">Status</th>
          <th class="p-4 text-right"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
          class="border-b border-gray-100 hover:bg-gray-50 transition"
        >
          <td
            class="p-4"
            :class="
              selected.includes(product.id) ? 'border-l-2 border-active' : ''
            "
          >
            <input
              type="checkbox"
              class="w-5 h-5"
              :checked="selected.includes(product.id)"
              @change="$emit('select', product.id, $event.target.checked)"
            />
          </td>
          <td class="p-4 font-semibold flex items-center gap-2 mr-5">
            <img
              :src="product.imageUrl"
              alt=""
              class="w-10 h-10 rounded object-cover"
            />
            <div class="flex flex-col gap-1">
              <div class="text-sm font-semibold">{{ product.name }}</div>
              <div class="text-xs text-gray-400">{{ product.category }}</div>
            </div>
          </td>
          <td class="font-light text-gray-500">{{ product.productCode }}</td>
          <td class="p-4 font-light text-gray-400">
            {{ product.date || "-" }}
          </td>
          <td class="p-4 font-light text-gray-600">
            ₺{{
              product.price.toLocaleString("tr-TR", {
                minimumFractionDigits: 2,
              })
            }}
          </td>
          <td class="p-4">
            <ProductStatus :status="product.status" />
          </td>
          <td class="p-4 text-right">
            <button class="cursor-pointer">
              <img src="/icons/table-btn.png" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import ProductStatus from "./ProductStatus.vue";

defineProps({
  products: Array,
  selected: Array,
  selectAll: Boolean,
});
defineEmits(["select", "toggleAll"]);
</script>
