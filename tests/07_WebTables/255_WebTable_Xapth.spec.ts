import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();

    //suedo code
    // find the row which has the text "Rohan.Mehta"
    // go to that row and click on the first column checkbox    
    await page
        .locator("tr:has(td:text('Rohan.Mehta'))")
        .locator("td")
        .first()
        .click();


    await page.waitForTimeout(5000);


});