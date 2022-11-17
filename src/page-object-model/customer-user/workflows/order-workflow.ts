/* eslint-disable max-len */
import { expect, Page } from '@playwright/test';
import { CartPage } from '../pages/cart-page';
import { CheckoutCompletePage } from '../pages/checkout-complete-page';
import { CheckoutStepOnePage } from '../pages/checkout-step-one-page';
import { CheckoutStepTwoPage } from '../pages/checkout-step-two-page';
import { InventoryPage } from '../pages/inventory-page';

/**
 * OrderWorkflow
 *
 * [.md file](../../../../docs/wiki/framework/customer-user/workflows/order-workflow.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/framework/customer-user/workflows/order-workflow.md)
 */
export class OrderWorkflow {
  /**
   * orderRedTShirt
   *
   * @param page
   */
  public static async orderRedTShirt(page: Page) {
    // Add inventory to Cart
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigateTo();
    await inventoryPage.clickAddToCart_RedTShirt();
    await inventoryPage.clickCart();
    // Cart
    const cartPage = new CartPage(page);
    await cartPage.landedOn();
    await cartPage.clickCheckOut();
    // checkout-step-one
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    await checkoutStepOnePage.landedOn();
    await checkoutStepOnePage.enterBillingInformation();
    await checkoutStepOnePage.clickContinue();
    // checkout-step-two
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    await checkoutStepTwoPage.landedOn();
    await checkoutStepTwoPage.clickFinish();
    // checkout complete
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.landedOn();
    await checkoutCompletePage.clickBackToProducts();
    // back to inventory
    await inventoryPage.landedOn();
  }
  /**
   * orderRedTShirt_withVisual
   *
   * This test works on windows, now trying on linux.
   *
   * @param page
   */
  public static async orderRedTShirt_withVisual(page: Page) {
    // Add inventory to Cart
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigateTo();
    expect(await page.screenshot()).toMatchSnapshot('inventory.png');
    await inventoryPage.clickAddToCart_RedTShirt();
    await inventoryPage.clickCart();
    // Cart
    const cartPage = new CartPage(page);
    await cartPage.landedOn();
    expect(await page.screenshot()).toMatchSnapshot('cart.png');
    await cartPage.clickCheckOut();
    // checkout-step-one
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    await checkoutStepOnePage.landedOn();
    expect(await page.screenshot()).toMatchSnapshot('checkuot-one.png');
    await checkoutStepOnePage.enterBillingInformation();
    await checkoutStepOnePage.clickContinue();
    // checkout-step-two
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    await checkoutStepTwoPage.landedOn();
    expect(await page.screenshot()).toMatchSnapshot('checkout-two.png');
    await checkoutStepTwoPage.clickFinish();
    // checkout complete
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.landedOn();
    expect(await page.screenshot()).toMatchSnapshot('checkout-complete.png');
    await checkoutCompletePage.clickBackToProducts();
    // back to inventory
    await inventoryPage.landedOn();
  }
}
export default { OrderWorkflow };
