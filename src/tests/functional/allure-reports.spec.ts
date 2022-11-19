import { test, expect } from '@playwright/test';
import { allure, LabelName } from 'allure-playwright';

test.describe('Unit Tests for Allure Reports', () => {
  const siteUrl = 'https://demo.playwright.dev/todomvc';
  const TODO_ITEMS = ['buy some cheese', 'feed the cat', 'book a doctors appointment'];
  test.beforeEach(() => {
    allure.epic('Allure Report Spike');
  });
  test('Labels Usage basic test', async ({ page }) => {
    allure.story('Labels');
    await page.goto(siteUrl);
    allure.label({ name: LabelName.LANGUAGE, value: 'typescript' });
  });
  test('Links Usage basic test', async ({ page }) => {
    allure.epic('Allure Report Spike');
    allure.story('Links');
    await page.goto(siteUrl);
    allure.link({ url: 'https://playwright.dev', name: 'playwright-site' });
    allure.issue({
      url: 'https://github.com/allure-framework/allure-js/issues/352',
      name: 'Target issue'
    });
  });
  test('Id Usage basic test', async ({ page }) => {
    allure.story('Ids');
    await page.goto(siteUrl);
    allure.id('Some id');
  });
  test('Epics Usage basic test', async ({ page }) => {
    allure.story('Epic');
    await page.goto(siteUrl);
  });
  test('Stories Usage basic test', async ({ page }) => {
    allure.story('Story');
    await page.goto(siteUrl);
  });
  test('Screenshot usage basic test', async ({ page }, testInfo) => {
    allure.story('Attach Screenshot');
    await page.goto(siteUrl);
    await testInfo.attach('basic-page-screen', {
      body: await page.screenshot(),
      contentType: 'image/png'
    });
  });
  test('Attachments Usage basic test', async ({ page }, testInfo) => {
    allure.story('Attach Data');
    await page.goto(siteUrl);
    await testInfo.attach('TODO_ITEMS', {
      body: JSON.stringify(TODO_ITEMS),
      contentType: 'application/json'
    });
  });
  test('Steps usage basic test', async ({ page }) => {
    allure.epic('Allure Report Spike');
    allure.story('Steps');
    await test.step('Visit todolist page', async () => {
      await page.goto(siteUrl);
    });
    await test.step('Create 1st todo.', async () => {
      await page.locator('.new-todo').fill(TODO_ITEMS[0]);
      await page.locator('.new-todo').press('Enter');
    });
    await expect(page.locator('.view label'), 'Make sure the list only has one todo item.').toHaveText([TODO_ITEMS[0]]);
  });
});
