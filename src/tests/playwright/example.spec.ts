/* eslint-disable global-require */
import { test } from '@playwright/test';
import { BaseApi, BaseApiHelper } from './PostClient';

test.describe('Unit Tests for Playwright', () => {
  let baseApi: BaseApi;
  test.beforeEach(({ request }) => {
    baseApi = new BaseApiHelper(request);
  });

  test('api test', async ({ request }) => {
    const response = await request.get('https://catfact.ninja/fact');
    // eslint-disable-next-line no-console
    console.log(response.statusText());
  });

  test('passing context api test', async () => {
    const response = await baseApi.sessionGet('https://catfact.ninja/fact');
    // eslint-disable-next-line no-console
    console.log(response.statusText());
  });

  test('intercept me', async ({ page }) => {
    await page.route('**/complete/search?*', async (route) => {
      const response = await page.request.fetch(route.request());
      const body = await response.text();
      // eslint-disable-next-line no-console
      console.log('got here');
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const fs = require('fs');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fs.writeFile('./body.txt', body, (err: any) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      });
      // eslint-disable-next-line no-console
      console.log(body);
      route.fulfill();
    });
    await page.goto('https://www.google.com/');
  });
});
