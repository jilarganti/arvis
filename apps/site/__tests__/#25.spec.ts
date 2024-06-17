import { test, expect } from '@playwright/test'

test('PageSpeed ​​Insights link', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/A.R.V.I.S./)
    await page.goto('/guide/introduction#what-is-a-r-v-i-s')
    await page.goto('/ru/guide/introduction')
    const page1Promise = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'Test' }).click()
    const page1 = await page1Promise
    await expect(page1.getByPlaceholder('Enter a web page URL')).toHaveValue('https://arvis-site.vercel.app/')
})

test('Check all https links for 404 status', async ({ page }) => {
    await page.goto('https://github.com/jilarganti/arvis')

    const links = page.locator('a:visible')
    const linksCount = await links.count()

    const hrefs = []
    for (let i = 0; i < linksCount; i++) {
        const href = await links.nth(i).getAttribute('href')
        if (href && href.startsWith('https://')) {
            hrefs.push(href)
        }
    }

    console.log('Checking links:')
    for (const link of hrefs) {
        const response = await page.goto(link)
        // console.log(`Checking link: ${link}`)
        expect(response?.status(), `Link ${link} returned status ${response?.status()}`).toBeLessThan(400)
    }
})
