import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search'

test.describe('Flipkart Seach via the SVG', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    })

    test('TC#1', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();
        const titleResults: Locator = page.locator("a.pIpigb");
        const count: number = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);

        }
        await page.waitForTimeout(2000);
        await page.getByText('Price -- Low to High').click();
        await page.waitForLoadState('networkidle');

        const priceResults = page.locator("div.hZ3P6w");
        const minPrice = await priceResults.first().innerText();

        console.log(minPrice);
        await page.pause();

    });


});