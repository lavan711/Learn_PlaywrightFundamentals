import { test, expect } from '@playwright/test';

test('OrageHRM Webtable - Find the First Terminated Employee', async ({ page }) => {
    await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').fill('Awesomeqa@4321');
    await page.getByRole('button', { name: 'Login' }).click();
    //await page.getByRole('table').getByRole('row', { name: '' }).getByRole('cell', { name: 'Terminated' }).click();
    const rowTable = await page.locator('oxd-table-card');
    const rowCount = await rowTable.locator('oxd-table-card').count();
    for (let i = 0; i < rowCount; i++) {
        const cell = await rowTable.locator('oxd-table-cell').nth(i).allInnerTexts();
        if (cell.includes('Terminated')) {
            console.log(`Found Terminated Employee at row ${i + 1}`);
            await rowTable.locator('oxd-icon bi-trash').nth(i).click();
            break;
        }
    }
});