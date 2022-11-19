import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { SecurityWorkflow } from '../../page-object-model/customer-user/workflows/security-workflows';
import { OrderWorkflow } from '../../page-object-model/customer-user/workflows/order-workflow';

test.describe.serial('Tests for Swag', () => {
  test.beforeEach(() => {
    const siteUrl = process.env.SITE_URL as string;
    allure.link({ url: siteUrl, name: 'test-site' });
    allure.link({ url: 'https://newrelic.com/', name: 'New Relic' });
    allure.link({
      url: 'https://github.com/Guzikowski/playwright.spikes/blob/main/docs/wiki/scenarios/buy-a-red-t-shirt.md',
      name: 'Wiki'
    });
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
