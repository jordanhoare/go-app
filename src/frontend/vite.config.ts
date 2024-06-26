// src/frontend/vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../backend/static",
        emptyOutDir: true,
        sourcemap: true,
        target: "esnext"
    },
    server: {
        proxy: {
            "/health": "http://localhost:8080",
            "/hello": "http://localhost:8080",
        }
    }
});