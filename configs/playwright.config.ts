import { defineConfig, devices } from "@playwright/test"

const baseUrl = "http://localhost:3000/"

/**
 * @see https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  testMatch: "e2e/*.test.ts",
  reporter: "html",

  // Run local dev server before starting the tests
  webServer: {
    command: "pnpm run dev",
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
  },
  /**
   * @see https://playwright.dev/docs/api/class-testoptions.
   */
  use: {
    baseURL: baseUrl,
    viewport: { width: 1280, height: 720 },
    locale: "en-GB",
    trace: "retry-with-trace",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      testDir: "../packages/site/",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
})
