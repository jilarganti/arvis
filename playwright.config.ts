import { defineConfig, devices } from '@playwright/test'

const baseUrl = 'http://localhost:4173'

/**
 * @see https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    fullyParallel: true, // Run tests in files in parallel
    forbidOnly: !!process.env.CI, // Fail the build on CI if you accidentally left test.only in the source code.
    retries: process.env.CI ? 2 : 0, // Retry on CI only
    workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI.
    testMatch: '**/*.e2e.{ts,js}',
    reporter: 'html',

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
            testDir: './packages/site/',
            use: { ...devices['Desktop Chrome'] },
        },
        // {
        //     name: 'Mobile Safari',
        //     testDir: './apps/site/test',
        //     use: { ...devices['iPhone 14'] },
        // },
        // {
        //     name: 'Microsoft Edge',
        //     testDir: './test',
        //     use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
    ],
})
