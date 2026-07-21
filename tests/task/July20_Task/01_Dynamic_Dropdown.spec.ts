import { test, expect } from '@playwright/test';

test('Validate Dynamic From and To Dropdowns in SpiceJet', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');
  await page.getByTestId('to-testID-origin').getByRole('textbox').fill('De');
  await page.locator('div.css-76zvg2').filter({ hasText: /^Delhi$/ }).first().click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('Ban');
  await page.locator('div.css-76zvg2').filter({ hasText: /^Bengaluru$/ }).first().click();
  await page.pause();

});