import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    optimizeDeps: {
        entries: [],
    },
    resolve: {
        alias: {
            '@arvis': resolve(__dirname, './apps/a.r.v.i.s./src/'),
            '@utils': resolve(__dirname, './packages/utils/src/'),
        },
    },
    test: {
        testTimeout: 30_000,
        name: 'unit',
        setupFiles: ['./test/setup.ts'],
        include: ['test/**/*.{test,spec}.{ts,js}'],
    },
})
