import { test, expect } from '@playwright/test';

test('Finding relative Xpath for the CURA Health Service', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    const appointmentName = page.locator("xpath=//a[@id='btn-make-appointment']");
    await appointmentName.click();
    const UserName = page.locator("xpath=//input[@id='txt-username']");
    await UserName.fill('John Doe');
    const Password = page.locator("xpath=//input[@id='txt-password']");
    await Password.fill('ThisIsNotAPassword');
    const LoginButton = page.locator("xpath=//button[@id='btn-login']");
    await LoginButton.click();
    const makeAppointmentHeader = page.locator("xpath=//h2[contains(text(),'Make Appointment')]");
    await expect(makeAppointmentHeader).toBeVisible();

});