import { test, expect, Locator } from '@playwright/test';
import { normalize } from 'node:path';

const URL = 'https://www.flipkart.com/search'

test.describe('Flipkart Seach via the SVG', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    })

    test('Search Mac Mini and print cheapest price', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();
        const titleResults: Locator = page.locator('a.pIpigb');
        const count: number = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);
        }

        const priceResults = page.locator('div:has-text("₹")');
        const pcount = await titleResults.count();

        let lowestPrice = Number.MAX_SAFE_INTEGER;
        let cheapestProduct = '';

        for (let i = 0; i < pcount; i++) {
            const title = await titleResults.nth(i).textContent();

            const priceText = await priceResults.nth(i).innerText();
            const match = priceText.match(/₹[\d,]+/);

            if (match) {
                const price = Number(
                    match[0].replace('₹', '').replace(/,/g, '')
                );

                if (!isNaN(price) && price < lowestPrice) {
                    lowestPrice = price;
                    cheapestProduct = title?.trim() || '';
                }
            }
        }

        expect(lowestPrice).not.toBe(Number.MAX_SAFE_INTEGER);

        console.log('\n==============================');
        console.log('Cheapest Mac Mini');
        console.log(`Title : ${cheapestProduct}`);
        console.log(`Price : ₹${lowestPrice.toLocaleString('en-IN')}`);
        console.log('==============================');

    });
});