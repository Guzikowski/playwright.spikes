import { test, expect } from '@playwright/test';

test.describe("Screenshots", () => {

    test('My first screenshot', async ({page}) => {
        await page.goto('https://demo.playwright.dev/todomvc');
        expect(await page.screenshot()).toMatchSnapshot('first-screenshot.png');
    })

    test('second screenshot', async ({page}) => {
        await page.goto('https://demo.playwright.dev/todomvc');
        expect(await page.screenshot()).toMatchSnapshot('first-screenshot.png');
        await page.goto('https://playwright.dev/');
        expect(await page.screenshot()).toMatchSnapshot('second-screenshot.png');
        expect(await page.screenshot()).toMatchSnapshot('first-screenshot.png');

    })

})