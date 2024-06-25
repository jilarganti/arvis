import { test } from '@playwright/test'

// @see https://github.com/users/jilarganti/projects/4/views/1?pane=issue&itemId=67330086
test('Stackblitz Publisher link', async ({ page }) => {
    await page.goto('/ru/guide/introduction')
    const page1Promise = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'Edit' }).click()
    const page1 = await page1Promise
    await page1.getByText('Sign in to propose changes').click()
    const page2Promise = page1.waitForEvent('popup')
    await page1.getByRole('button', { name: 'Sign in to StackBlitz' }).click()
    await page2Promise
})
