import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================

export class CompleteCreatePage{
    readonly page : Page;
    readonly createAccountMsg : Locator;
    readonly continueBtn : Locator;

    // ================ constructor =================

constructor(page :Page){
    this.page = page;
    this.createAccountMsg = page.getByText("Account Created!")
    this.continueBtn = page.locator(".btn-primary")
}
    // ================ methods and actions ===========

async navigateToPrductsPage(){
        await this.continueBtn.click();
    }

     // ================ Assertions =================
     
async expectCompleteAcount() {
        await expect(this.createAccountMsg).toBeVisible();
    }
}
