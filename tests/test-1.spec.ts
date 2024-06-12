import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
    // Recording...
})
await page.goto('https://arvis-site.vercel.app/')
await page.goto('https://arvis-site.vercel.app/guide/introduction#what-is-a-r-v-i-s')
await page.goto('https://arvis-site.vercel.app/ru/guide/introduction')
