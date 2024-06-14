import { test, expect } from '@playwright/test'

test('PageSpeed ​​Insights link', async ({ page }) => {
    await page.goto('/')
    await page.goto('/guide/introduction#what-is-a-r-v-i-s')
    await page.goto('/ru/guide/introduction')
    const page1Promise = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'Test' }).click()
    const page1 = await page1Promise
    await expect(page1.getByPlaceholder('Enter a web page URL')).toHaveValue('https://arvis-site.vercel.app/')
})
