import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mars3dPlugin } from "vite-plugin-mars3d";
import { Plugin } from "vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      "@view": path.resolve(__dirname, "src/view"),
      "@components":path.resolve(__dirname, "src/view/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@api": path.resolve(__dirname, "src/api"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  plugins: [react(), mars3dPlugin() as unknown as Plugin],
});
