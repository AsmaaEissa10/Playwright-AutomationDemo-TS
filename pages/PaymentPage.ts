import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================
export class PaymentPage{
    readonly page : Page;
    readonly nameOfCard: Locator;
    readonly CardNumber : Locator;
    readonly cvcNumber : Locator;
    readonly monthExpire : Locator;
    readonly yearExpire : Locator;
    readonly confirmOrder : Locator;


    // ================ constructor ===============

constructor(page :Page){
    this.page = page;
    this.nameOfCard = page.locator("input[name='name_on_card']");
    this.CardNumber = page.locator("input[name='card_number']");
    this.cvcNumber = page.getByPlaceholder("ex. 311");
    this.monthExpire = page.getByPlaceholder("MM");
    this.yearExpire = page.getByPlaceholder("YYYY");
    this.confirmOrder = page.locator("#submit");
}
    // ================ methods and actions =================

async FillPaymentInfo(nameOfCard: string, cardNumber: string, cvcNumber: string, monthExpire: string, yearExpire: string){
await this.nameOfCard.fill(nameOfCard);
await this.CardNumber.fill(cardNumber);
await this.cvcNumber.fill(cvcNumber);
await this.monthExpire.fill(monthExpire);
await this.yearExpire.fill(yearExpire);
}

async navigateToCompleteOrderPage(){
    await this.confirmOrder.click();
}
}



