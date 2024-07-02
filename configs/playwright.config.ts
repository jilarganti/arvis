import { defineConfig, devices } from "@playwright/test"

const baseUrl = process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000/"

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

  // The webServer to start only if PLAYWRIGHT_TEST_BASE_URL is set in the environment variables
  webServer: {
    command: !process.env.PLAYWRIGHT_TEST_BASE_URL ? "pnpm run dev" : "",
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

  timeout: 30000, // Timeout is shared between all tests.
  projects: [
    {
      name: "chromium",
      testDir: "../packages/",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "staging",
    //   testDir: "../packages/site/",
    //   use: {
    //     baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL,
    //     ...devices["Desktop Chrome"],
    //   },
    //   retries: 2,
    // },
    // {
    //   name: "production",
    //   use: {
    //     baseURL: "https://arvis-site.vercel.app/",
    //     ...devices["Desktop Chrome"],
    //   },
    //   retries: 0,
    // },
  ],
})
