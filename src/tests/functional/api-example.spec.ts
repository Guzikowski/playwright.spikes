/* eslint-disable global-require */
import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { BaseApi, BaseApiHelper } from '../../classes/PostClient';

test.describe('Unit Tests for Playwright API Testing', () => {
  let baseApi: BaseApi;
  test.beforeEach(({ request }) => {
    baseApi = new BaseApiHelper(request);
  });

  test('api test', async ({ request }) => {
    allure.epic('API Spike');
    allure.story('Request Get');
    const response = await request.get('https://catfact.ninja/fact');
    expect(response.statusText()).toBe('OK');
  });

  test('passing context api test', async () => {
    allure.epic('API Spike');
    allure.story('Request context');
    const response = await baseApi.sessionGet('https://catfact.ninja/fact');
    expect(response.statusText()).toBe('OK');
  });

  test('intercept me', async ({ page }) => {
    allure.epic('API Spike');
    allure.story('Route intercept');
    await page.route('**/complete/search?*', async (route) => {
      const response = await page.request.fetch(route.request());
      expect(response.statusText()).toBe('OK');
      const body = await response.text();
      expect(body).not.toBeNull();
      route.fulfill();
    });
    await page.goto('https://www.google.com/');
  });
});
