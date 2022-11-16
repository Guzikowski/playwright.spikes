import { Page, expect } from '@playwright/test';

export class CheckoutCompletePage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}checkout-complete.html`;

  constructor(page: Page) {
    this.page = page;
  }
  async clickBackToProducts() {
    await this.page.locator('[data-test="back-to-products"]').click();
  }

  async landedOn(): Promise<void> {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { CheckoutCompletePage };
