import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private pageTitle = 'Swag Labs';
  private pageUrl = `${process.env.SITE_URL}`;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(): Promise<void> {
    await this.page.goto(this.pageUrl);
    this.landedOn();
  }
  async login(userName: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(userName);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }
  async landedOn(): Promise<void> {
    await expect(this.page).toHaveURL(this.pageUrl);
    await expect(this.page).toHaveTitle(this.pageTitle);
    await expect(this.page.locator('.login_logo')).toBeVisible();
  }
}
export default { LoginPage };
