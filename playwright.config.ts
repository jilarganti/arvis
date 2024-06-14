import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const baseUrl = 'http://localhost:4173'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    // reporter: 'html',
    // Run local dev server before starting the tests
    webServer: {
        command: 'pnpm run preview',
        url: baseUrl,
        reuseExistingServer: !process.env.CI,
    },
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: baseUrl,

        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        bypassCSP: true,
        locale: 'en-GB',
        video: 'on-first-retry',
        trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: [
        //
        {
            name: 'chromium',
            testDir: './apps/site/__tests__',
            use: { ...devices['Desktop Chrome'] },
        },
        /* Test against mobile viewports. */
        {
            name: 'Mobile Safari',
            testDir: './apps/site/__tests__',
            use: { ...devices['iPhone 14'] },
        },
        /* Test against branded browsers. */
        {
            name: 'Microsoft Edge',
            testDir: './__tests__',
            use: { ...devices['Desktop Edge'], channel: 'msedge' },
        },
    ],
})
