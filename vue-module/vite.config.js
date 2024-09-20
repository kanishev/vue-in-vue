import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vue-select",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Select": "./src/MySelect.vue",
      },
      shared: ["primevue/config"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
