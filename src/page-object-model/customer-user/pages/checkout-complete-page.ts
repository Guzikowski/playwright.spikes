/* eslint-disable max-len */
import { Page, expect } from '@playwright/test';

/**
 * CheckoutCompletePage
 *
 * [.md file](../../../../docs/wiki/framework/customer-user/pages/checkout-complete-page.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/framework/customer-user/pages/checkout-complete-page.md)
 */
export class CheckoutCompletePage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}checkout-complete.html`;

  /**
   * constructor
   *
   * @param page
   */
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * clickBackToProducts
   */
  async clickBackToProducts() {
    await this.page.locator('[data-test="back-to-products"]').click();
  }
  /**
   * landedOn
   */
  async landedOn() {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { CheckoutCompletePage };
