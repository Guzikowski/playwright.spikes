import { test, expect } from '@playwright/test';
import axios, { AxiosResponse } from 'axios'


test.describe("Unit Tests for Axios",() => {

  test('test simple API Get', async () => {   
    var response = await axios.get('https://dummy.restapiexample.com/api/v1/employee/1');
    expect(response).not.toBeNull();
    console.log(`Got Axios Response `)
  });

  test('test complex return API Get', async () => {   
    const { data, status } = await axios.get('https://dummy.restapiexample.com/api/v1/employee/1');
    expect(data).not.toBeNull();
    expect(status).toBe(200);
    console.log('response status is: ', status);
    console.log(`Got Axios Response ${JSON.stringify(data, null, 4)}`)
  });

  test('test typed return API Get', async () => {   
    var response: AxiosResponse = await axios.get('https://dummy.restapiexample.com/api/v1/employee/1');
    expect(response.data).not.toBeNull();
    expect(response.status).toBe(200);
    console.log('response status is: ', response.status);
    console.log(`Got Axios Response ${JSON.stringify(response.data, null, 4)}`)
  });
});

