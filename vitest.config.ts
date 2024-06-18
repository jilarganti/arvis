import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    optimizeDeps: {
        entries: [],
    },
    resolve: {
        alias: {
            '@arvis': resolve(__dirname, './apps/a.r.v.i.s./src/'),
            '@site': resolve(__dirname, './apps/site/.vitepress/config/'),
            '@utils': resolve(__dirname, './packages/utils/src/'),
        },
    },
    test: {
        testTimeout: 30_000,
        globals: true,
        name: 'unit',
        setupFiles: ['./apps/site/__tests__/setup.ts'],
        include: ['**/__tests__/*.test.{ts,js}'],
    },
})
