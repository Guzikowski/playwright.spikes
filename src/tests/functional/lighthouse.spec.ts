import { test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';
import playwright from 'playwright';

test.describe('Sample audit example', () => {
  test('open browser', async () => {
    test.slow();
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222']
    });
    const page = await browser.newPage();
    await page.goto('https://angular.io/');

    await playAudit({
      page,
      thresholds: {
        performance: 35,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50
      },
      port: 9222
    });

    await browser.close();
  });
});
