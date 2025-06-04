import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: true,
  css: ["~/assets/styles/main.css"],
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false, // üretimde sourcemap kapatılır
    },
  },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
});
