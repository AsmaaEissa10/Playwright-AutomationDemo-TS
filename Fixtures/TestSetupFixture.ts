// Custom test fixture setup using Playwright
// This initializes the Page Object Manager and opens the base URL before each test
// It ensures that every test starts with a ready-to-use page instance
// Useful for keeping tests clean and avoiding repeated setup code

import { test as base } from "@playwright/test" 
import { PoManager } from "../pages/PoManager";

// Define the type for our custom fixture, which will include the Page Object Manager
type OpenBaseURLFixture = {
poManager : PoManager;
};

// extend the base test with a custom fixture that sets up the test environment
export const test = base.extend<OpenBaseURLFixture>({
poManager : async ({page}, use)=>{
const poManager = new PoManager (page);
await poManager.getHomePage().open();  // Open the website URL
use (poManager)}
});












