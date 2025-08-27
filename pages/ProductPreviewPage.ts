import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================
export class ProductPreviewPage{
    readonly page : Page;
    readonly addTocart : Locator;
    readonly viewCart : Locator;

    // ================ constructor =================
    

constructor(page :Page){
    this.page = page;
    this.addTocart = page.locator("button[type='button']");
    this.viewCart = page.locator('a[href="/view_cart"] u')
}
    // ================ methods and actions =================


async ClickOnAddTocart(){
   await this.addTocart.click();
}

async NavigateToShoppingCartPage(){
    await this.viewCart.click();
}
}



