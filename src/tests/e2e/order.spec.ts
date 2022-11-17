import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { SecurityWorkflow } from '../../page-object-model/customer-user/workflows/security-workflows';
import { OrderWorkflow } from '../../page-object-model/customer-user/workflows/order-workflow';

test.describe.serial('Tests for Swag', () => {
  test('test order from the inventory and check out', async ({ page }) => {
    const siteUrl = process.env.SITE_URL as string;
    allure.link({ url: siteUrl, name: 'test-site' });
    allure.link({
      url: 'https://github.com/Guzikowski/playwright.spikes/blob/main/docs/wiki/Scenarios/buy-a-red-t-shirt.md',
      name: 'Wiki'
    });
    allure.epic('Swag e-Commerce Website');
    allure.story('Buy a Red T-Shirt');

    // login
    await SecurityWorkflow.login(page);

    // Order Red T-Shirt
    await OrderWorkflow.orderRedTShirt(page);

    // logout
    await SecurityWorkflow.logout(page);
    await page.close();
  });
  test('test order from the inventory and check out with visual', async ({ page }) => {
    if (process.env.CI) {
      test.skip();
    }
    test.slow();
    const siteUrl = process.env.SITE_URL as string;
    allure.link({ url: siteUrl, name: 'test-site' });
    allure.link({
      url: 'https://github.com/Guzikowski/playwright.spikes/blob/main/docs/wiki/Scenarios/buy-a-red-t-shirt.md',
      name: 'Wiki'
    });
    allure.epic('Swag e-Commerce Website');
    allure.story('Buy a Red T-Shirt with Visual Regression');

    // login
    await SecurityWorkflow.login_withVisual(page);

    // Order Red T-Shirt
    await OrderWorkflow.orderRedTShirt_withVisual(page);

    // logout
    await SecurityWorkflow.logout(page);
    await page.close();
  });
});
