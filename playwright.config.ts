import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./src/environments/global-setup'),
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    toHaveScreenshot: { maxDiffPixels: 100 },
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [['allure-playwright'], ['list']] : [['allure-playwright'], ['html'], ['dot']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'unit',
      retries: 0,
      testDir: './src/tests/unit',
      use: {
        actionTimeout: 0,
        trace: 'off'
      }
    },
    {
      name: 'functional',
      retries: process.env.CI ? 1 : 0,
      testDir: './src/tests/functional',
      use: {
        actionTimeout: 0,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'e2e',
      retries: process.env.CI ? 2 : 0,
      testDir: './src/tests/e2e',
      use: {
        actionTimeout: 0,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'e2e firefox',
      retries: process.env.CI ? 2 : 0,
      testDir: './src/tests/e2e',
      use: {
        actionTimeout: 0,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        ...devices['Desktop Firefox']
      }
    },
    {
      name: 'e2e webkit',
      retries: process.env.CI ? 2 : 0,
      testDir: './src/tests/e2e',
      use: {
        actionTimeout: 0,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        ...devices['Desktop Safari']
      }
    }
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/'
};

export default config;
