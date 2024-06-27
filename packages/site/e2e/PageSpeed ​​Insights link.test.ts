import { test, expect } from "@playwright/test"

// @see https://github.com/users/jilarganti/projects/4/views/1?pane=issue&itemId=67330086
test("PageSpeed ​​Insights link", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/A.R.V.I.S./)
  await page.goto("/guide/introduction#what-is-a-r-v-i-s")
  await page.goto("/ru/guide/introduction")
  const page1Promise = page.waitForEvent("popup")
  await page.getByRole("link", { name: "Test" }).click()
  const page1 = await page1Promise
  await expect(page1.getByPlaceholder("Enter a web page URL")).toHaveValue(
    "https://arvis-site.vercel.app/",
  )
})
