import { test, expect } from '@playwright/test';

test('Companies Static Table', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    const row = page.getByTestId('companies-table').locator('tr');
    const rowCount = await row.count();
    for (let i = 0; i < rowCount; i++) {
        const cell = await row.nth(i).locator('td').allInnerTexts();
        console.log(cell);
        if (cell.includes('Yoshi Tannamuri')) {
            console.log(`Found Yoshi Tannamuri at row ${i + 1}`);
            console.log(`Company: ${cell[0]}, Country: ${cell[2]}`);
        }
    }


});


