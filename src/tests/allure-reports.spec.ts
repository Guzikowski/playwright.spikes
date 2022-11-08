import { test, expect } from '@playwright/test';
import { allure, LabelName } from 'allure-playwright';

test.describe('Unit Tests for Allure Reports', () => {
  test('Labels Usage basic test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    allure.label({ name: LabelName.LANGUAGE, value: 'typescript' });
  });

  test('Links Usage basic test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    allure.link({ url: 'https://playwright.dev', name: 'playwright-site' });
    allure.issue({
      url: 'https://github.com/allure-framework/allure-js/issues/352',
      name: 'Target issue'
    });
  });

  test('Id Usage basic test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    allure.id('Some id');
  });

  test('Epics Usage basic test', async ({ page }) => {
    allure.epic('Some Epic');
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('Stories Usage basic test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    allure.story('Some Story');
  });

  test('Screenshot usage basic test', async ({ page }, testInfo) => {
    await testInfo.attach('basic-page-screen', {
      body: await page.screenshot(),
      contentType: 'image/png'
    });
  });

  const TODO_ITEMS = ['buy some cheese', 'feed the cat', 'book a doctors appointment'];

  test('Steps usage Attachments Usage basic test', async ({ page }, testInfo) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await testInfo.attach('TODO_ITEMS', {
      body: JSON.stringify(TODO_ITEMS),
      contentType: 'application/json'
    });
  });

  test('basic test', async ({ page }) => {
    await test.step('Visit todolist page', async () => {
      await page.goto('https://demo.playwright.dev/todomvc');
    });

    await test.step('Create 1st todo.', async () => {
      await page.locator('.new-todo').fill(TODO_ITEMS[0]);
      await page.locator('.new-todo').press('Enter');
    });

    await expect(page.locator('.view label'), 'Make sure the list only has one todo item.').toHaveText([TODO_ITEMS[0]]);
  });
});
