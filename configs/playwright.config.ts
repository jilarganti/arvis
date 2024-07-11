import { defineConfig, devices } from "@playwright/test"

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

  webServer: {
    command: "pnpm run dev",
  },
  /**
   * @see https://playwright.dev/docs/api/class-testoptions.
   */
  use: {
    baseURL: "http://localhost:5173/",
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
