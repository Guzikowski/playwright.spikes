import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { SecurityWorkflow } from '../../page-object-model/customer-user/workflows/security-workflows';

test.describe
  .serial('Tests for Swag', () => {
    test.beforeEach(() => {
      const siteUrl = process.env.SITE_URL as string;
      allure.link(siteUrl, 'test-site');
      allure.link('https://newrelic.com/', 'New Relic');
      allure.link('https://github.com/Guzikowski/playwright.spikes/blob/main/docs/wiki/scenarios/log-in-and-log-out.md', 'Wiki');
      allure.epic('Swag e-Commerce Website');
    });
    test('Logging in and out with standard user', async ({ page }) => {
      allure.story('Log in and Log out');
      await test.step('Login as Standard User', async () => {
        await SecurityWorkflow.login(page);
      });
      await test.step('Log out user', async () => {
        await SecurityWorkflow.logout(page);
        await page.close();
      });
    });
  });
