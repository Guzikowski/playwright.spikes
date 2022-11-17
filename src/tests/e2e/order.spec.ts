import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { SecurityWorkflow } from '../../page-object-model/customer-user/workflows/security-workflows';
import { OrderWorkflow } from '../../page-object-model/customer-user/workflows/order-workflow';

test.describe.serial('Tests for Swag', () => {
  test('test order from the inventory and check out', async ({ page }) => {
    const siteUrl = process.env.SITE_URL as string;
    allure.link({ url: siteUrl, name: 'test-site' });
    allure.link({ url: 'https://github.com/Guzikowski/playwright.spikes/blob/main/docs/wiki/README.md', name: 'Wiki' });
    allure.link({
      url: 'https://miro.com/app/board/uXjVPH85Yzw=/?moveToWidget=3458764538219775401&cot=14',
      name: 'Miro'
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
    allure.link({ url: 'https://github.com/Guzikowski/playwright.spikes/blob/main/docs/wiki/README.md', name: 'Wiki' });
    allure.link({
      url: 'https://miro.com/app/board/uXjVPH85Yzw=/?moveToWidget=3458764538219775401&cot=14',
      name: 'Miro'
    });

    allure.epic('Swag e-Commerce Website');
    allure.story('Buy some swag with Visual Regression');

    // login
    await SecurityWorkflow.login_withVisual(page);

    // Order Red T-Shirt
    await OrderWorkflow.orderRedTShirt_withVisual(page);

    // logout
    await SecurityWorkflow.logout(page);
    await page.close();
  });
});
