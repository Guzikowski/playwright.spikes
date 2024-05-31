import { type Page, test } from '@playwright/test';
import { allure } from 'allure-playwright';

interface PlayAuditOptions {
  page: Page;
  thresholds: {
    performance: number;
    accessibility: number;
    'best-practices': number;
    seo: number;
    pwa: number;
  };
  ignoreError?: boolean;
  port?: number;
  reports: {
    formats: { html: boolean };
    name: string;
    directory: string;
  };
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type PlaywrightLighthouseResult = any;

type PlayAudit = (options: PlayAuditOptions) => Promise<PlaywrightLighthouseResult>;

let playAudit: PlayAudit;

test.describe
  .serial('Lighthouse Sample Audit @lighthouse', () => {
    //TODO: This will require some rework based on the way we are compiling typescript.
    test.skip(true, 'Skipping Lighthouse tests');
    test.beforeEach(async () => {
      allure.epic('Lighthouse Spike');
      const { playAudit: importedPlayAudit } = await import('playwright-lighthouse');
      playAudit = importedPlayAudit as PlayAudit;
    });

    test('Angular landing page', async ({ page }) => {
      allure.story('Angular Site');
      test.slow();
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
    });

    test('Sauce Demo landing page', async ({ page }) => {
      allure.story('Sauce Demo Site');
      test.slow();
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
    });
  });
