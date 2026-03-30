import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/',
    plugins: [react()],
    build: {
        outDir: 'build',
        emptyOutDir: true,
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) return 'vendor'
                    if (id.includes('/features/rule/')) return 'rule'
                    if (id.includes('/features/enemy/')) return 'enemy'
                    if (id.includes('/features/booklet/')) return 'booklet'
                    if (id.includes('/features/adventure/')) return 'adventure'
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: ['html-react-parser'],
        exclude: ['js-big-decimal'],
    },
})
