import { defineConfig, devices } from "@playwright/test"

/**
 * To test the preview you need to disable the Vercel toolbar !
 * @see https://vercel.com/arvis-me/arvis/settings/general
 */
const isDev = !process.env.PLAYWRIGHT_TEST_BASE_URL
const baseUrl = process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000/"
const command = isDev ? "pnpm run dev" : ""

/**
 * @see https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  testMatch: "e2e/*.{spec,test}.ts",
  reporter: "html",
  timeout: 10000,

  // The webServer to start only if PLAYWRIGHT_TEST_BASE_URL is set in the environment variables
  webServer: {
    command: command,
    url: baseUrl,
    reuseExistingServer: true,
  },
  /**
   * @see https://playwright.dev/docs/api/class-testoptions.
   */
  use: {
    baseURL: baseUrl,
    // viewport: { width: 1280, height: 720 },
    locale: "en-GB",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      testDir: "../packages/",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
})
