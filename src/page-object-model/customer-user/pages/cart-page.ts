/* eslint-disable max-len */
import { type Page, expect } from '@playwright/test';

/**
 * CartPage
 *
 * [.md file](../../../../docs/wiki/framework/customer-user/pages/cart-page.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/framework/customer-user/pages/cart-page.md)
 */
export class CartPage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}cart.html`;

  /**
   * constructor
   *
   * @param page
   */
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * clickCheckOut
   */
  async clickCheckOut() {
    await this.page.locator('[data-test="checkout"]').click();
  }
  /**
   * landedOn
   */
  async landedOn() {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { CartPage };
