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
    
    await page.selectOption('#combo_facility', { label: 'Seoul CURA Healthcare Center' });
    await page.locator("xpath=//input[@id='chk_hospital_readmission' and @type='checkbox']").check();
    const healthcareProgram = page.locator("xpath=//input[@id='radio_program_medicaid' and @type='radio']");
    await healthcareProgram.check();
    const visitDate = page.locator("xpath=//input[@id='txt_visit_date' and @type='text']");
    await visitDate.click();
    await visitDate.fill('05/09/2026');
    await visitDate.press('Escape');
    const Comments = page.locator("xpath=//textarea[@id='txt_comment' and @placeholder='Comment']");
    await Comments.fill('Need to check my whole body as I am having issue with stomach');
    const bookAppointmentButton = page.locator("xpath=//button[@id='btn-book-appointment' and @type='submit']");
    await bookAppointmentButton.click();
    const appointmentConfirmationHeader = page.locator("xpath=//h2[contains(text(),'Appointment Confirmation')]");
    await expect(appointmentConfirmationHeader).toBeVisible();
});
