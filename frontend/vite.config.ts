import { loadEnv, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../priv/static",
    target: ["es2022"],
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].js",
      },
    },
    commonjsOptions: {
      exclude: [],
      // include: []
    },
  },
  define: {
    __APP_ENV__: env.APP_ENV,
  },
})
