<template>
  <div class="font-cairo font-semibold text-xl">
    <cards />
    <div class="mt-10 bg-white rounded-lg p-4">
      <div class="product-table-scroll-anchor"></div>
      <ProductTableHeader :search="search" @update:search="val => search = val"/>
      <ProductTable
        :products="filteredProducts"
        :selected="selected"
        :selectAll="selectAll"
        @select="onSelect"
        @toggleAll="onToggleAll"
      />
      <ProductTableFooter
        :startItem="startItem"
        :endItem="endItem"
        :totalItems="productsStore.totalItems"
        :page="productsStore.page"
        :totalPages="productsStore.totalPages"
        @changePage="changePage"
      />
    </div>
  </div>
</template>

<script setup>
import cards from "~/components/app/cards.vue";
import { ref, computed, onMounted } from 'vue';
import { useProductsStore } from '~/stores/products';
import ProductTableHeader from '~/components/app/table/ProductTableHeader.vue';
import ProductTableFooter from '~/components/app/table/ProductTableFooter.vue';
import ProductTable from '~/components/app/table/ProductTable.vue';

const productsStore = useProductsStore();
const search = ref('');
const selected = ref([]);
const selectAll = ref(false);
const pageSize = 12;

onMounted(() => {
  productsStore.fetchProducts(1);
});

const filteredProducts = computed(() => {
  if (!search.value) return productsStore.productsList;
  return productsStore.productsList.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase()) ||
    p.productCode.toLowerCase().includes(search.value.toLowerCase())
  );
});

const startItem = computed(() => (productsStore.page - 1) * pageSize + 1);
const endItem = computed(() => {
  const last = productsStore.page * pageSize;
  return last > productsStore.totalItems ? productsStore.totalItems : last;
});

function changePage(page) {
  if (page < 1 || page > productsStore.totalPages) return;
  productsStore.fetchProducts(page);
  selectAll.value = false;
  selected.value = [];
  setTimeout(() => {
    const table = document.querySelector('.product-table-scroll-anchor');
    if (table) table.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function onSelect(id, checked) {
  if (checked) {
    if (!selected.value.includes(id)) selected.value.push(id);
  } else {
    selected.value = selected.value.filter(x => x !== id);
  }
}

function onToggleAll(checked) {
  selectAll.value = checked;
  if (checked) {
    selected.value = filteredProducts.value.map(p => p.id);
  } else {
    selected.value = [];
  }
}

</script>
