import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================
export class CheckOutPage{
    readonly page : Page;
    readonly placeOrederBtn : Locator;
  

    // ================ constructor ================

constructor(page :Page){
    this.page = page;
    this.placeOrederBtn = page.locator(".check_out");
}
    // ================ methods and actions =================

async navigateToPaymentPage(){
    await this.placeOrederBtn.click();
}
}



