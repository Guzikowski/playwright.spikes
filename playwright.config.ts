import type { PlaywrightTestConfig } from '@playwright/test';
import { testPlanFilter } from "allure-playwright/dist/testplan";
import * as os from "os";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testMatch: [
    /.*\.ts/
    // 'tests/functional/ui/login-static-user.spec.ts'
    // 'tests/e2e/rnd-verify-cancels.spec.ts'
  ],
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
   /* Fail execution after # of failures to reduce the waiting when it is busted */
   maxFailures: process.env.CI ? 5 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  grep: testPlanFilter(),
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'], ['list'], ['blob'],
   [
      "allure-playwright",
      {
        detail: true,
        suiteTitle: false,
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version         
        }
      }
    ]
  ],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: ['**/src/environments/setup/global-setup.ts'],
    },
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
      snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}-{platform}{ext}',
      use: {
        actionTimeout: 0,
        screenshot: 'only-on-failure',
        trace: 'retain-on-first-failure',
        browserName: 'chromium',
      }
    },
    {
      name: 'chromium',
      retries: process.env.CI ? 1 : 0,
      testDir: './src/tests/e2e',
      snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}-{platform}{ext}',
      use: {
        actionTimeout: 0,
        browserName: 'chromium',
        screenshot: {
          mode: 'only-on-failure',
          fullPage: true
        },
        trace: 'retain-on-first-failure',
        viewport: { width: 1920, height: 1080 }
      }
    },
    {
      name: 'firefox',
      retries: process.env.CI ? 1 : 0,
      testDir: './src/tests/e2e',
      snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}-{platform}{ext}',
      use: {
        actionTimeout: 0,
        browserName: 'firefox',
        screenshot: {
          mode: 'only-on-failure',
          fullPage: true
        },
        trace: 'retain-on-first-failure',
        viewport: { width: 1920, height: 1080 }
      }
    },
    {
      name: 'webkit',
      retries: process.env.CI ? 1 : 0,
      testDir: './src/tests/e2e',
      snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}-{platform}{ext}',
      use: {
        actionTimeout: 0,
        browserName: 'webkit',
        screenshot: {
          mode: 'only-on-failure',
          fullPage: true
        },
        trace: 'retain-on-first-failure',
        viewport: { width: 1920, height: 1080 }
      }
    }
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/'
};

export default config;
