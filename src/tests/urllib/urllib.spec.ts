import { test, expect } from '@playwright/test';
import { request } from 'urllib';

test.describe("Unit Tests for Urllib",() => {

  test('test simple API Get', async () => {   
    var response = await request('https://dummy.restapiexample.com/api/v1/employee/1', { method: 'GET' });
    expect(response).not.toBeNull();
    console.log(`Got Urllib Response `)
  });
});
