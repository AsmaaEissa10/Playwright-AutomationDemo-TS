// poManager is the Page Object Manager instance.
// It provides access to all page objects like HomePage, SignUpAndLoginPage, and CreateAccountPage.....
// This helps keep the test clean and modular by separating page logic from test steps.
import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { SignUpAndLoginPage } from "./SignUpAndLoginPage";
import { CreateAcountPage } from "./CreateAcountPage";
import { CompleteCreatePage} from "./CompleteCreatePage";
import { ProductsPage } from "./ProductsPage";
import { ProductPreviewPage } from "./ProductPreviewPage";
import { ShoppingCartPage } from "./ShoppingCartPage";
import { CheckOutPage } from "./CheckOutPage";
import { PaymentPage } from "./PaymentPage";
import { OrderCompletePage } from "./OrderCompletePage";


export class PoManager {
    private readonly page : Page;
    private readonly homePage : HomePage;
    private readonly signUpAndLoginPage : SignUpAndLoginPage;
    private readonly createAcountPage : CreateAcountPage;
    private readonly completeCreatePage : CompleteCreatePage;
    private readonly productsPage : ProductsPage;
    private readonly productPreviewPage : ProductPreviewPage;
    private readonly shoppingCartPage : ShoppingCartPage;
    private readonly checkOutPage : CheckOutPage;
    private readonly paymentPage : PaymentPage;
    private readonly orderCompletePage : OrderCompletePage;

    // ================ constructor =================

constructor(page :Page){
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.signUpAndLoginPage = new SignUpAndLoginPage(this.page);
    this.createAcountPage = new CreateAcountPage(this.page);
    this.completeCreatePage = new CompleteCreatePage(this.page);
    this.productsPage = new ProductsPage(this.page);
    this.productPreviewPage = new ProductPreviewPage (this.page);
    this.shoppingCartPage = new ShoppingCartPage(this.page);
    this.checkOutPage = new CheckOutPage(this.page);
    this.paymentPage = new PaymentPage(this.page);
    this.orderCompletePage = new OrderCompletePage(this.page);
}

   // ================ methods =================

   getHomePage(){
    return this.homePage;
   }

    getSignUpAndLoginPage(){
    return this.signUpAndLoginPage;
   } 
   
   getCreateAcountPage(){
    return this.createAcountPage;
   } 
   
   getCompleteCreatePage(){
    return this.completeCreatePage;
   } 
   
   getProductsPage(){
    return this.productsPage;
   } 
   
   getProductPreviewPage(){
    return this.productPreviewPage;
   }
   
   getShoppingCartPage(){
    return this.shoppingCartPage;
   }
   
   getCheckOutPage(){
    return this.checkOutPage;
   } 
   
   getPaymentPage(){ 
    return this.paymentPage;
   } 
   
   
   getOrderCompletePage(){
    return this.orderCompletePage;
   }

}

