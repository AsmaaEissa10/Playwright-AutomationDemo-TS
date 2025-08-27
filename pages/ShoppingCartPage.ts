import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================
export class ShoppingCartPage{
    readonly page : Page;
    readonly checkOutBtn : Locator;
 
    // ================ constructor =================

constructor(page :Page){
    this.page = page;
    this.checkOutBtn = page.locator(".check_out");
 
}
    // ================ methods and actions ===========

async navigateToCheckCartPage(){
    await this.checkOutBtn.click();
}
}



