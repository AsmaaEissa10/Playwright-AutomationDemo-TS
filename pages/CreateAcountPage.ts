import { expect , Locator , Page } from "@playwright/test";

    // ================ locators =================
export class CreateAcountPage{
    readonly page : Page;
    readonly genderFemale : Locator;
    readonly nameField: Locator;
    readonly emailField : Locator;
    readonly passwordField : Locator;
    readonly dayOfBirth : Locator;
    readonly monthOfBirth : Locator;
    readonly yearOfBirth : Locator;
    readonly firstNameField : Locator;
    readonly lastNameField : Locator;
    readonly companyField : Locator;
    readonly adress1Field : Locator;
    readonly adress2field : Locator;
    readonly countryField : Locator;
    readonly stateField : Locator;
    readonly cityField : Locator;
    readonly zipCodeField : Locator;
    readonly mobileField : Locator;
    readonly createAccountBtn  : Locator;


     // ================ constructor =================

constructor(page :Page){
    this.page = page;
    this.genderFemale = page.locator('#id_gender2');
    this.nameField = page.locator('#name');
    this.emailField = page.locator('#email');
    this.passwordField = page.locator('#password');
    this.dayOfBirth = page.locator('#days');
    this.monthOfBirth = page.locator('#months');
    this.yearOfBirth = page.locator('#years');
    this.firstNameField = page.getByLabel("First name");
    this.lastNameField = page.getByLabel("Last name");
    this.companyField = page.locator('#company');
    this.adress1Field = page.locator('#address1');
    this.adress2field = page.locator('#address2');
    this.countryField = page.locator("#country");
    this.stateField = page.locator('#state');
    this.cityField = page.locator('#city');
    this.zipCodeField = page.locator('#zipcode');
    this.mobileField = page.locator('#mobile_number');
    this.createAccountBtn = page.locator("button[data-qa='create-account']");

}
     // ================ methods and actions =================

async ValidRegister ( password:string, dayOfBirth:string, monthOfBirth:string, yearOfBirth:string, firstName:string, lastName:string, company:string,
    address1:string, address2:string, country:string, state: string, city:string,
    zipcode:string, mobile:string)
{                    
   await this.genderFemale.click();
   await this.passwordField.fill(password);
   await this.dayOfBirth.selectOption(dayOfBirth);
   await this.monthOfBirth.selectOption(monthOfBirth);
   await this.yearOfBirth.selectOption(yearOfBirth);
   await this.firstNameField.fill(firstName);
   await this.lastNameField.fill(lastName);
   await this.companyField.fill(company);
   await this.adress1Field.fill(address1);
   await this.adress2field.fill(address2);
   await this.countryField.selectOption(country);
   await this.stateField.fill(state);
   await this.cityField.fill(city);
   await this.zipCodeField.fill(zipcode);
   await this.mobileField.fill(mobile);
   await this.createAccountBtn.click();
}};