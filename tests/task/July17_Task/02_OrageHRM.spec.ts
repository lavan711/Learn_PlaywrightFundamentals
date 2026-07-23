import { test, expect } from '@playwright/test';

test('OrageHRM Webtable - Find the First Terminated Employee', async ({ page }) => {
    await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').fill('Awesomeqa@4321');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('.oxd-table-body')).toBeVisible();
const rowTable = await page.locator('div.oxd-table-card');
    const rowCount = await rowTable.count();
    for (let i = 0; i < rowCount; i++) {
        const cell = await rowTable.nth(i).locator('div.oxd-table-cell').allInnerTexts();
        console.log(cell);
        if (cell.includes('Terminated')) {
            console.log(`Found Terminated Employee at row ${i + 1}`);
            await rowTable.nth(i).locator('i.oxd-icon.bi-trash').click();
            break;
        }
    }
});

