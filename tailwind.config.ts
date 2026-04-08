export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  corePlugins: {
    preflight: false, // ⚠️ tránh phá CSS host
  },
};
