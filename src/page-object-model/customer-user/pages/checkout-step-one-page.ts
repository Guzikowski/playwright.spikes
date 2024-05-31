/* eslint-disable max-len */
import { randFirstName, randLastName, randZipCode } from '@ngneat/falso';
import { type Page, expect } from '@playwright/test';

/**
 * CheckoutStepOnePage
 *
 * [.md file](../../../../docs/wiki/framework/customer-user/pages/checkout-step-one-page.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/framework/customer-user/pages/checkout-step-one-page.md)
 */
export class CheckoutStepOnePage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}checkout-step-one.html`;
  /**
   * constructor
   *
   * @param page
   */
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * clickContinue
   */
  async clickContinue() {
    await this.page.locator('[data-test="continue"]').click();
  }
  /**
   * enterBillingInformation
   */
  async enterBillingInformation() {
    await this.page.locator('[data-test="firstName"]').fill(randFirstName({ withAccents: false }));
    await this.page.locator('[data-test="lastName"]').fill(randLastName({ withAccents: false }));
    await this.page.locator('[data-test="postalCode"]').fill(randZipCode());
  }
  /**
   * landedOn
   */
  async landedOn() {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { CheckoutStepOnePage };
