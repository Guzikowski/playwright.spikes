import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';

test.describe('Tests for Visual Regression @visual', () => {
  test.beforeEach(() => {
    allure.epic('Visual Regression Spike');
  });
  test('My first screenshot', async ({ page }) => {
    allure.story('Verify match snapshot');
    await page.goto(process.env.SITE_URL as string);
    expect(await page.screenshot()).toMatchSnapshot('first-screenshot.png');
  });
  test('second screenshot', async ({ page }) => {
    allure.story('Verify match snapshot and not equal to first snapshot');
    await page.goto('https://playwright.dev/');
    expect(await page.screenshot()).toMatchSnapshot('second-screenshot.png');
    expect(await page.screenshot()).not.toMatchSnapshot('first-screenshot.png');
  });
  test('third screenshot', async ({ page }) => {
    allure.story('Verify match snapshot and not equal to first snapshot');
    await page.goto(process.env.SITE_URL as string);
    expect(await page.screenshot()).toMatchSnapshot('third-screenshot.png');
    expect(await page.screenshot()).toMatchSnapshot('first-screenshot.png');
  });
});
