import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // 通常は 'dist' に出力
    rollupOptions: {
      input: "index.html", // `front/` 内なら、このままでOK
    },
  },
});
