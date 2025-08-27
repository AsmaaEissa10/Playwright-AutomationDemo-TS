import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================
export class OrderCompletePage{
    readonly page : Page;
    readonly confirmMessage : Locator;
    readonly contiueButton : Locator;

    // ================ constructor =================

constructor(page :Page){
    this.page = page;
    this.confirmMessage = page.locator('p:has-text("Congratulations! Your order has been confirmed!")');
    this.contiueButton = page.locator(".btn.btn-primary");
}
    // ================ methods and actions =================


async NavigateToHomePage(){
    await this.contiueButton.click();
}
 
     // ================ Assertions =====================

async ExpectedToSeeConfirmMessage(completeMessage: string){
    await expect(this.confirmMessage).toHaveText(completeMessage);
}
}
