import { defineStore } from 'pinia';
import axios from '~/utils/axios';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
  }),
  actions: {
    async fetchProducts(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`/products?page=${page}`);
        const data = response.data;
        this.products = data.data || [];
        this.page = data.currentPage || page;
        this.totalPages = data.totalPages || 1;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    productCount: (state) => state.products.length,
    productsList: (state) => state.products,
  },
}); 