import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/sma-nusantara-website/',
    root: './',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ppdb: resolve(__dirname, 'ppdb.html'),
                galeri: resolve(__dirname, 'galeri.html'),
            },
        },
    },
    server: {
        open: true,
        port: 5173,
    },
})
