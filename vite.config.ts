import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "Chatbot",
      fileName: () => "chatbot.js",
      formats: ["iife"], // ⚠️ bắt buộc cho embed
    },
    cssCodeSplit: false, // Include CSS in the JS bundle
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
