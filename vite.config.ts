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
  },
});
