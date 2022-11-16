import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { SecurityWorkflow } from '../../page-object-model/customer-user/workflows/security-workflows';

test.describe.serial('Tests for Swag', () => {
  test('test logging in and out with standard user', async ({ page }) => {
    const siteUrl = process.env.SITE_URL as string;
    allure.link({ url: siteUrl, name: 'test-site' });
    allure.link({ url: 'https://github.com/Guzikowski/playwright.spikes/blob/main/docs/wiki/README.md', name: 'Wiki' });
    allure.link({
      url: 'https://miro.com/app/board/uXjVPH85Yzw=/?moveToWidget=3458764538219775401&cot=14',
      name: 'Miro'
    });

    allure.epic('Swag e-Commerce Website');
    allure.story('Log in and Log out');

    await SecurityWorkflow.login(page);
    await SecurityWorkflow.logout(page);
    await page.close();
  });
});