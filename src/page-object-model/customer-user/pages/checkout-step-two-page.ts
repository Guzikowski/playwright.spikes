import { Page, expect } from '@playwright/test';

export class CheckoutStepTwoPage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}checkout-step-two.html`;

  constructor(page: Page) {
    this.page = page;
  }
  async clickFinish() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async landedOn(): Promise<void> {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { CheckoutStepTwoPage };
