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

test('links on github', async ({ page }) => {
    await page.goto('/')
    const page1Promise = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'github' }).click()
    const page1 = await page1Promise
    // const page2Promise = page1.waitForEvent('popup')

    // await expect(page.getByRole('heading', { name: 'A.R.V.I.S: AI-enhanced video' })).toBeVisible()
    // await expect(page).toHaveURL(/.*arvis/)

    // await page1.getByRole('link', { name: 'site-arvis.vercel.app/' }).click()
    // const page2 = await page2Promise
    // const page3Promise = page2.waitForEvent('popup')
    // await page2.getByRole('link', { name: 'github' }).click()
    // const page3 = await page3Promise
    // await page3.getByRole('link', { name: 'Code of Conduct', exact: true }).click()
})
