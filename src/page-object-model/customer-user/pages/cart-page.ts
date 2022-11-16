import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}cart.html`;

  constructor(page: Page) {
    this.page = page;
  }
  async clickCheckOut() {
    await this.page.locator('[data-test="checkout"]').click();
  }
  async landedOn(): Promise<void> {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { CartPage };
