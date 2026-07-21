import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Select!', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    //native select
    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown", "Option 2");
    //await page.pause();


});