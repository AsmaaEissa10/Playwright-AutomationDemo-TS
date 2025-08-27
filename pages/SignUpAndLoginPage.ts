import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================
    
export class SignUpAndLoginPage {
    readonly page : Page;
    readonly NameField : Locator;
    readonly EmailAdressField : Locator;
    readonly SignUpBtn : Locator;

    // ================ constructor =================

constructor(page :Page){
    this.page = page;
    this.NameField = page.getByPlaceholder('Name');
    this.EmailAdressField = page.locator("input[data-qa='signup-email']");
    this.SignUpBtn = page.locator("button[data-qa='signup-button']");
}

    // ================ methods and actions =============

async navigateToCreateAccountPage(name:string, emailAdress:string){
    await this.NameField.fill(name);
    await this.EmailAdressField.fill(emailAdress);
    await this.SignUpBtn.click();
}
}