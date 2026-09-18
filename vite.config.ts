import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/aiwebsite/" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        us: resolve(__dirname, "us/index.html"),
        animation: resolve(__dirname, "animation/index.html"),
      },
    },
  },
});
