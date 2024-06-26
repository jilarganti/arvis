/// <reference types="vitest" />

/**
 * @see Configure Vitest (https://vitest.dev/config/)
 */

import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@arvis': resolve(__dirname, '../packages/a.r.v.i.s./src/'),
      '@site': resolve(__dirname, '../packages/site/.vitepress/config/'),
      '@utils': resolve(__dirname, '../packages/utils/src/'),
    },
  },
  test: {
    include: ['**/test/*.{spec,test}.ts'],
    globals: true,
    reporters: ['html'],
  },
})
