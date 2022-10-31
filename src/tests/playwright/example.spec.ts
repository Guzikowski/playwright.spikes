import { test } from '@playwright/test';
import { BaseApi, BaseApiHelper } from './PostClient';

test.describe("Unit Tests for Playwright",() => {
  var baseApi: BaseApi;
  test.beforeEach(({request}) => {
     baseApi = new BaseApiHelper(request);
   });

 test('api test', async ({request}) => {
    const response = await request.get(`https://catfact.ninja/fact`);
    console.log(response.statusText());
  });

  test('passing context api test', async () => {
    const response = await baseApi.sessionGet(`https://catfact.ninja/fact`, {});
    console.log(response.statusText());
  });

  test('intercept me', async ({page}) => {
    await page.route('**/complete/search?*', async route => {
      const response = await page.request.fetch(route.request());
      let body = await response.text();
      console.log("got here");
      const fs = require('fs');
        fs.writeFile("./body.txt", body, function(err: any) {
            if (err) {
                console.log(err);
            }
        });
      console.log(body);
      route.fulfill();  
    });
    await page.goto('https://www.google.com/');
  });
});