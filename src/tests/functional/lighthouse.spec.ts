import { test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';
import playwright from 'playwright';
import { allure } from 'allure-playwright';

test.describe.serial('Lighthouse Sample Audit @lighthouse', () => {
  test.beforeEach(() => {
    allure.epic('Lighthouse Spike');
  });
  test('Angular landing page', async () => {
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
      ignoreError: true,
      port: 9222,
      reports: {
        formats: { html: true },
        name: `angular-lighthouse-report-${Date.now().toString()}`,
        directory: 'lighthouse-reports'
      }
    });

    await browser.close();
  });
  test('Sauce Demo landing page', async () => {
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
      ignoreError: true,
      port: 9222,
      reports: {
        formats: { html: true },
        name: `sauce-demo-lighthouse-report-${Date.now().toString()}`,
        directory: 'lighthouse-reports'
      }
    });

    await browser.close();
  });
});
