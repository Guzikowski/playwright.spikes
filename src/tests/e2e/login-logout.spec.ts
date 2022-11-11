import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

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

    await page.goto(siteUrl);
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('.login_logo')).toBeVisible();
    await page.locator('[data-test="username"]').fill(process.env.SITE_STANDARD_USER as string);
    await page.locator('[data-test="password"]').fill(process.env.SITE_PASSWORD as string);
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(`${siteUrl}inventory.html`);

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveURL(siteUrl);
    await expect(page.locator('.login_logo')).toBeVisible();
  });
});
