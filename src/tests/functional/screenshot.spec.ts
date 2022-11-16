import { test, expect } from '@playwright/test';

test.describe('Tests for Visual Regression', () => {
  if (process.env.CI) {
    test.skip();
  }
  /**
   * [Test 1](https://github.com/Guzikowski/Playwright_E2E_API_Calls/wiki/My-Tests#test-1)
   */
  test('My first screenshot', async ({ page }) => {
    await page.goto(process.env.SITE_URL as string);
    expect(await page.screenshot()).toMatchSnapshot('first-screenshot.png');
  });
  /**
   * [Test 2](https://github.com/Guzikowski/Playwright_E2E_API_Calls/wiki/My-Tests#test-2)
   */
  test('second screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    expect(await page.screenshot()).toMatchSnapshot('second-screenshot.png');
    expect(await page.screenshot()).not.toMatchSnapshot('first-screenshot.png');
  });
  test('third screenshot', async ({ page }) => {
    await page.goto(process.env.SITE_URL as string);
    expect(await page.screenshot()).toMatchSnapshot('third-screenshot.png');
    expect(await page.screenshot()).toMatchSnapshot('first-screenshot.png');
  });
});
