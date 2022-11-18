import { test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';
import playwright from 'playwright';
import { allure } from 'allure-playwright';

test.describe.serial('Lighthouse Sample Audit @lighthouse', () => {
  test('Angular landing page', async () => {
    allure.epic('Lighthouse Spike');
    allure.story('Angular Site');
    test.slow();
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222']
    });
    const page = await browser.newPage();
    await page.goto('https://angular.io/');

    await playAudit({
      page,
      thresholds: {
        performance: 30,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50
      },
      port: 9222
    });

    await browser.close();
  });
  test('Sauce Demo landing page', async () => {
    allure.epic('Lighthouse Spike');
    allure.story('Sauce Demo Site');
    test.slow();
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222']
    });
    const page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');

    await playAudit({
      page,
      thresholds: {
        performance: 90,
        accessibility: 90,
        'best-practices': 90,
        seo: 90,
        pwa: 90
      },
      port: 9222
    });

    await browser.close();
  });
});
