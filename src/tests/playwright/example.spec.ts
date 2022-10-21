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

});