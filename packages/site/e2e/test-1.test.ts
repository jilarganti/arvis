import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("/")
  await page.goto("/guide/introduction#what-is-a-r-v-i-s")
  await page.getByRole("switch", { name: "Switch to dark theme" }).click()
  await page.getByRole("switch", { name: "Switch to light theme" }).click()
  const page1Promise = page.waitForEvent("popup")
  await page.getByRole("link", { name: "github" }).click()
  const page1 = await page1Promise
  // const page2Promise = page1.waitForEvent("popup")
  // await page1.getByRole("link", { name: "arvis-site.vercel.app/" }).click()
  // const page2 = await page2Promise
})
