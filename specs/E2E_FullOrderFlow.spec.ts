/*
Import the custom test setup that includes shared fixtures like poManager
This helps us reuse setup logic across multiple tests
*/
import {test} from "../Fixtures/TestSetupFixture";
/*
Import test data from JSON files to keep the test dynamic and maintainable
This allows us to separate logic from data and easily update inputs
*/
import signUpPageTestData from "../testData/signUpPageTestData.json"
import createAccountTestData  from "../testData/createAccountTestData.json"
import paymentTestData from "../testData/paymentTestData.json"
import completeOrderTestData from "../testData/completeOrderTestData.json"

/*
 Define the test case for completing a product order
This test simulates complete user flow from registration to order confirmation
*/
test ('User completes product order successfully',async ({poManager}) =>{

await poManager.getHomePage().navigateToRegisterPage();                 //Go to the registration page
await poManager.getSignUpAndLoginPage().navigateToCreateAccountPage(      
    signUpPageTestData.name, 
    signUpPageTestData.emailAdress + Date.now() +"@gmail.com")

await poManager.getCreateAcountPage().ValidRegister(             //Fill in user details and create a new account
    createAccountTestData.password,
    createAccountTestData.dayOfBirth,
    createAccountTestData.monthOfBirth,
    createAccountTestData.yearOfBirth,
    createAccountTestData.firstName,
    createAccountTestData.lastName,
    createAccountTestData.company,
    createAccountTestData.address1,
    createAccountTestData.address2,
    createAccountTestData.country,
    createAccountTestData.state,
    createAccountTestData.city,
    createAccountTestData.zipcode,
    createAccountTestData.mobile);
await poManager.getCompleteCreatePage().expectCompleteAcount();
await poManager.getCompleteCreatePage().navigateToPrductsPage();   // Submit and confirm account creation

await poManager.getProductsPage().hoverProduct();
await poManager.getProductsPage().navigateToProductPreviewPage();    // Click on a product to view its details
await poManager.getProductPreviewPage().ClickOnAddTocart();          //Add the product to the shopping cart
await poManager.getProductPreviewPage().NavigateToShoppingCartPage();
await poManager.getShoppingCartPage().navigateToCheckCartPage();
await poManager.getCheckOutPage().navigateToPaymentPage();
await poManager.getPaymentPage().FillPaymentInfo(                   // Fill in payment and delivery information
    paymentTestData.nameOfCard, 
    paymentTestData.cardNumber,
    paymentTestData.cvcNumber, 
    paymentTestData.monthExpire,
    paymentTestData.yaerExpire)
await poManager.getPaymentPage().navigateToCompleteOrderPage();
await poManager.getOrderCompletePage().ExpectedToSeeConfirmMessage(completeOrderTestData.completeMessage);
await poManager.getOrderCompletePage().NavigateToHomePage();   // Display the order confirmation message
});








