/* eslint-disable max-len */
import { type Page, expect } from '@playwright/test';

/**
 * CheckoutStepTwoPage
 *
 * [.md file](../../../../docs/wiki/framework/customer-user/pages/checkout-step-two-page.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/framework/customer-user/pages/checkout-step-two-page.md)
 */
export class CheckoutStepTwoPage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}checkout-step-two.html`;
  /**
   * constructor
   *
   * @param page
   */
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * clickFinish
   */
  async clickFinish() {
    await this.page.locator('[data-test="finish"]').click();
  }
  /**
   * landedOn
   */
  async landedOn() {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { CheckoutStepTwoPage };
