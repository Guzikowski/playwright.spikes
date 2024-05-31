/* eslint-disable max-len */
import { type Page, expect } from '@playwright/test';

/**
 * LoginPage
 *
 * [.md file](../../../../docs/wiki/framework/customer-user/pages/login-page.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/framework/customer-user/pages/login-page.md)
 */
export class LoginPage {
  private page: Page;
  private pageTitle = 'Swag Labs';
  private pageUrl = `${process.env.SITE_URL}`;
  /**
   * constructor
   *
   * @param page
   */
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * navigateTo
   */
  async navigateTo() {
    await this.page.goto(this.pageUrl);
    this.landedOn();
  }
  /**
   * login
   *
   * @param userName
   * @param password
   */
  async login(userName: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(userName);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }
  /**
   * landedOn
   */
  async landedOn() {
    await expect(this.page).toHaveURL(this.pageUrl);
    await expect(this.page).toHaveTitle(this.pageTitle);
    await expect(this.page.locator('.login_logo')).toBeVisible();
  }
}
export default { LoginPage };
