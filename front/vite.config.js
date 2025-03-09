import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default {
  build: {
    outDir: "front/dist", // 'front' フォルダ内に出力される
    rollupOptions: {
      input: "/front/index.html", // Vercelに適切なエントリーポイントを指定
    },
  },
};
