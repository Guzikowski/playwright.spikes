import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { OrderWorkflow } from '../../page-object-model/customer-user/workflows/order-workflow';
import { SecurityWorkflow } from '../../page-object-model/customer-user/workflows/security-workflows';

test.describe
  .serial('Tests for Swag', () => {
    test.beforeEach(() => {
      const siteUrl = process.env.SITE_URL as string;
      allure.link(siteUrl, 'test-site');
      allure.link('https://newrelic.com/', 'New Relic');
      allure.link('https://github.com/Guzikowski/playwright.spikes/blob/main/docs/wiki/scenarios/buy-a-red-t-shirt.md', 'Wiki');
      allure.epic('Swag e-Commerce Website');
    });
    test('Order from the inventory and check out', async ({ page }) => {
      allure.story('Buy a Red T-Shirt');

      await test.step('Login as Standard User', async () => {
        await SecurityWorkflow.login(page);
      });
      await test.step('Order Red T-Shirt', async () => {
        await OrderWorkflow.orderRedTShirt(page);
      });
      await test.step('Log out user', async () => {
        await SecurityWorkflow.logout(page);
        await page.close();
      });
    });
    test('Order from the inventory and check out with visual regression @visual', async ({ page }) => {
      test.slow();
      allure.story('Buy a Red T-Shirt with Visual Regression');

      await test.step('Login as Standard User', async () => {
        await SecurityWorkflow.login_withVisual(page);
      });
      await test.step('Order Red T-Shirt', async () => {
        await OrderWorkflow.orderRedTShirt_withVisual(page);
      });
      await test.step('Log out user', async () => {
        await SecurityWorkflow.logout(page);
        await page.close();
      });
    });
  });
