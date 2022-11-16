import { expect, Page } from '@playwright/test';
import { InventoryPage } from '../pages/inventroy-page';
import { LoginPage } from '../pages/login-page';

export class SecurityWorkflow {
  public static async login(page: Page) {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigateTo();
    await loginPage.login(process.env.SITE_STANDARD_USER as string, process.env.SITE_PASSWORD as string);
    await inventoryPage.landedOn();
  }
  public static async login_withVisual(page: Page) {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigateTo();
    expect(await page.screenshot()).toMatchSnapshot('login.png');
    await loginPage.login(process.env.SITE_STANDARD_USER as string, process.env.SITE_PASSWORD as string);
    await inventoryPage.landedOn();
  }
  public static async logout(page: Page) {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigateTo();
    await inventoryPage.selectLogout();
    await loginPage.landedOn();
  }
}
export default { SecurityWorkflow };
