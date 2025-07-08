import { loadEnv, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
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
    test: {
      globals: true,
      environment: 'jsdom',
    },
    resolve: {
      conditions: mode === 'test' ? ['browser'] : [],
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})
