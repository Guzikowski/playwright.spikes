/* eslint-disable max-len */
import { type Page, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventory-page';
import { LoginPage } from '../pages/login-page';

/**
 * SecurityWorkflow
 *
 * [.md file](../../../../docs/wiki/framework/customer-user/workflows/security-workflow.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/framework/customer-user/workflows/security-workflow.md)
 */
export namespace SecurityWorkflow {
  /**
   * login
   *
   * @param page
   */
  export async function login(page: Page) {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigateTo();
    await loginPage.login(`${process.env.SITE_STANDARD_USER}`, `${process.env.SITE_PASSWORD}`);
    await inventoryPage.landedOn();
  }
  /**
   * login_withVisual
   *
   * @param page
   */
  export async function login_withVisual(page: Page) {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.navigateTo();
    expect(await page.screenshot()).toMatchSnapshot('login.png');
    await loginPage.login(process.env.SITE_STANDARD_USER as string, process.env.SITE_PASSWORD as string);
    await inventoryPage.landedOn();
  }
  /**
   * logout
   *
   * @param page
   */
  export async function logout(page: Page) {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigateTo();
    await inventoryPage.selectLogout();
    await loginPage.landedOn();
  }
}
export default { SecurityWorkflow };
