import { test, expect } from '@playwright/test';

test('Hover the addon menu and select Wi-Fi', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    await page.getByTestId('nav-add-ons').hover();
    await page.waitForTimeout(1000);
    const addons = await page
        .locator('[data-testid="nav-add-ons"] .submenu .submenu-item')
        .allInnerTexts();
    console.log(addons);

    const wifi = page.getByText('Wi-Fi');

    await expect(wifi).toBeVisible();
    await wifi.click();
});