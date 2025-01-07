import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/_variables" as*;
          @use "@/assets/scss/_mixin" as*;
        `,
      },
    },
  },
});

// module.exports = {};
