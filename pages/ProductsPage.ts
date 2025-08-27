import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================
export class ProductsPage{
    readonly page : Page;
    readonly product1 : Locator;
    readonly product2 : Locator;
    readonly product3 : Locator;
    readonly viewProductbtn : Locator;

    // ================ constructor =================

constructor(page :Page){
    this.page = page;
    this.product1 = page.locator(".col-sm-4").nth(1);
    this.product2 = page.locator(".col-sm-4").nth(5);
    this.product3 = page.locator(".col-sm-4").nth(6);
    this.viewProductbtn = page.locator("a[href='/product_details/5']");

}
    // ================ methods and actions =================

async hoverProduct(){
   await this.product1.hover();
   await this.product2.hover();
   await this.product3.hover();

}
async navigateToProductPreviewPage(){
    await this.viewProductbtn.click();
}
}


