/* eslint-disable max-len */
import { type Page, expect } from '@playwright/test';

/**
 * InventoryPage
 *
 * [.md file](../../../../docs/wiki/framework/customer-user/pages/inventory-page.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/framework/customer-user/pages/inventory-page.md)
 */
export class InventoryPage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}inventory.html`;
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
   * clickAddToCart_RedTShirt
   */
  async clickAddToCart_RedTShirt() {
    await this.page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  }
  /**
   * clickCart
   */
  async clickCart() {
    await this.page.locator('a:has-text("1")').click();
  }
  /**
   * selectLogout
   */
  async selectLogout() {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }
  /**
   * landedOn
   */
  async landedOn() {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { InventoryPage };
