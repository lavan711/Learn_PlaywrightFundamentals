import { test, expect } from '@playwright/test';

test('Automate Student Login', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    //Locating the email and password input fields
    const email= page.locator('#email');
    const password= page.locator('#password');
    const expectedURL = "https://app.thetestingacademy.com/playwright/multiple_element_filter?email=asadf%40yopmail.com&password=student&remember=yes#login-success";

    await email.fill("asadf@yopmail.com");
    await password.fill("student");
    await page.getByRole('checkbox', { name: 'remember' }).check();
    await page.getByTestId('login-button').click();
    await expect(page).toHaveURL(expectedURL);

});