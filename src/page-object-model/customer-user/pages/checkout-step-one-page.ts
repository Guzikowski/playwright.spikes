import { randFirstName, randLastName, randZipCode } from '@ngneat/falso';
import { Page, expect } from '@playwright/test';

export class CheckoutStepOnePage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}checkout-step-one.html`;

  constructor(page: Page) {
    this.page = page;
  }
  async clickContinue() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async enterBillingInformation() {
    await this.page.locator('[data-test="firstName"]').fill(randFirstName({ withAccents: false }));
    await this.page.locator('[data-test="lastName"]').fill(randLastName({ withAccents: false }));
    await this.page.locator('[data-test="postalCode"]').fill(randZipCode());
  }

  async landedOn(): Promise<void> {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { CheckoutStepOnePage };
