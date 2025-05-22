import tailwindcss from "@tailwindcss/vite";
export default {
  
  devtools: true,
  css: ['~/assets/styles/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
}