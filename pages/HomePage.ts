import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================

export class HomePage{
    readonly page : Page;  //create a variable for the page
    readonly signUpAndLoginIcon : Locator;  //create a variable for signUpAndLoginIcon


    // ================ variables =================

    readonly url: string = "https://automationexercise.com/";

    // ================ constructor =================

constructor(page :Page){
    this.page = page;
    this.signUpAndLoginIcon = page.locator("a[href='/login']"); // set signUpAndLoginIcon locator
   
}
    // ================ methods and actions ============
async open(){
    await this.page.goto(this.url);
}

async navigateToRegisterPage(){
    await this.signUpAndLoginIcon.click();
}


























9
 
}

     // ================ Assertions =================


