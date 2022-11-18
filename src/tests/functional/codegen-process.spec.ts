import { randFirstName, randLastName, randZipCode } from '@ngneat/falso';
import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { CartPage } from '../../page-object-model/customer-user/pages/cart-page';
import { CheckoutCompletePage } from '../../page-object-model/customer-user/pages/checkout-complete-page';
import { CheckoutStepOnePage } from '../../page-object-model/customer-user/pages/checkout-step-one-page';
import { CheckoutStepTwoPage } from '../../page-object-model/customer-user/pages/checkout-step-two-page';
import { InventoryPage } from '../../page-object-model/customer-user/pages/inventory-page';
import { LoginPage } from '../../page-object-model/customer-user/pages/login-page';
import { OrderWorkflow } from '../../page-object-model/customer-user/workflows/order-workflow';
import { SecurityWorkflow } from '../../page-object-model/customer-user/workflows/security-workflows';

test.describe('Codegen Process to POM @codegen', () => {
  test('Codegen raw capture of ordering', async ({ page }) => {
    allure.epic('Codegen to POM Spike');
    allure.story('Raw Capture');
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    await page.locator('#shopping_cart_container a').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Joe');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Black');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('90210');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.close();
  });

  test('Codegen Phase 1 clean up', async ({ page }) => {
    allure.epic('Codegen to POM Spike');
    allure.story('Clean up pass');
    // 1. Remove unnecessay steps
    // 2. Replace environemnt variable
    // 3. Replace random data
    // 4. Identify initial page transition
    //
    // login
    await page.goto(`${process.env.SITE_URL}`);
    await page.locator('[data-test="username"]').fill(`${process.env.SITE_STANDARD_USER}`);
    await page.locator('[data-test="password"]').fill(`${process.env.SITE_PASSWORD}`);
    await page.locator('[data-test="login-button"]').click();
    // inventory
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    await page.locator('#shopping_cart_container a').click();
    // cart
    await page.locator('[data-test="checkout"]').click();
    // checkout step one
    await page.locator('[data-test="firstName"]').fill(randFirstName({ withAccents: false }));
    await page.locator('[data-test="lastName"]').fill(randLastName({ withAccents: false }));
    await page.locator('[data-test="postalCode"]').fill(randZipCode());
    await page.locator('[data-test="continue"]').click();
    // checkout step two
    await page.locator('[data-test="finish"]').click();
    // checkout complete
    await page.locator('[data-test="back-to-products"]').click();
    // inventory
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    // login
    await page.close();
  });
  test('Codegen Phase 2 add POM', async ({ page }) => {
    allure.epic('Codegen to POM Spike');
    allure.story('Adding POM');
    // 1. Implement initial POM
    // 2. Identify Workflows
    //
    // login
    // BEGIN Login Workflow
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.login(`${process.env.SITE_STANDARD_USER}`, `${process.env.SITE_PASSWORD}`);
    // inventory
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.landedOn();
    // BEGIN Order Workflow
    await inventoryPage.clickAddToCart_RedTShirt();
    await inventoryPage.clickCart();
    // cart
    const cartPage = new CartPage(page);
    await cartPage.landedOn();
    await cartPage.clickCheckOut();
    // checkout step one
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    await checkoutStepOnePage.landedOn();
    await checkoutStepOnePage.enterBillingInformation();
    await checkoutStepOnePage.clickContinue();
    // checkout step two
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    await checkoutStepTwoPage.landedOn();
    await checkoutStepTwoPage.clickFinish();
    // checkout complete
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.landedOn();
    await checkoutCompletePage.clickBackToProducts();
    // inventory
    await inventoryPage.landedOn();
    // BEGIN Logout Workflow
    await inventoryPage.selectLogout();
    // login
    await loginPage.landedOn();
    await page.close();
  });
  test('Codegen Final Phase add Workflow', async ({ page }) => {
    allure.epic('Codegen to POM Spike');
    allure.story('Add Workflow');
    // 1. Implement Workflows
    // login
    await SecurityWorkflow.login(page);
    // Order Red T-Shirt
    await OrderWorkflow.orderRedTShirt(page);
    // logout
    await SecurityWorkflow.logout(page);
    await page.close();
  });

  test('Codegen Start New', async ({ page }) => {
    allure.epic('Codegen to POM Spike');
    allure.story('Start New from existing');
    // 1. Starting new Workflows
    // login
    await SecurityWorkflow.login(page);
  });
});
