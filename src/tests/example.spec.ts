/* eslint-disable global-require */
import { expect, test } from '@playwright/test';
import { BaseApi, BaseApiHelper } from '../PostClient';

test.describe('Unit Tests for Playwright', () => {
  let baseApi: BaseApi;
  test.beforeEach(({ request }) => {
    baseApi = new BaseApiHelper(request);
  });

  test('api test', async ({ request }) => {
    const response = await request.get('https://catfact.ninja/fact');
    expect(response.statusText()).toBe('OK');
  });

  test('passing context api test', async () => {
    const response = await baseApi.sessionGet('https://catfact.ninja/fact');
    expect(response.statusText()).toBe('OK');
  });

  test('intercept me', async ({ page }) => {
    await page.route('**/complete/search?*', async (route) => {
      const response = await page.request.fetch(route.request());
      expect(response.statusText()).toBe('OK');
      const body = await response.text();
      expect(body).not.toBeNull();
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const fs = require('fs');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fs.writeFile('./body.txt', body, (err: any) => {
        expect(err).toBeNull();
      });
      route.fulfill();
    });
    await page.goto('https://www.google.com/');
  });
});
