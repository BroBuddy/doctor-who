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
                    if (id.includes('/features/rule/pages/'))
                        return 'rule-pages'
                    if (id.includes('/features/enemy/pages/'))
                        return 'enemy-pages'
                    if (id.includes('/features/adventure/pages/'))
                        return 'adventure-pages'
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
