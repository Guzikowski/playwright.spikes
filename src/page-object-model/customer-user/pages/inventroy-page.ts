import { Page, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private pageUrl = `${process.env.SITE_URL}inventory.html`;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateTo(): Promise<void> {
    await this.page.goto(this.pageUrl);
    this.landedOn();
  }
  async clickAddToCart_RedTShirt() {
    await this.page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  }
  async clickCart() {
    await this.page.locator('a:has-text("1")').click();
  }
  async selectLogout() {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }
  async landedOn(): Promise<void> {
    await expect(this.page).toHaveURL(this.pageUrl);
  }
}
export default { InventoryPage };
