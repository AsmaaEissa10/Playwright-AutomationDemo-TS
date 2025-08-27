 * # 🎯Playwright Automation Demo using TypeScript
* ### 🔗 *Base URL:* [Automation Exercise](https://automationexercise.com/)
* ### 📚 *Docs:* [Playwright Documentation](https://playwright.dev/docs/intro)

* ## 🧩 Project Design
- *Page Object Model (POM):* Organizes page actions into reusable classes
- *PoManager:* Central access point for all page objects
- *Fixtures:* Shared setup logic before tests run
- *Data-driven Testing:* Uses JSON files for test inputs
- *Allure Reports:* Generated after test execution for visual results

* ## 📁 Project Structure
Folder/FileDescription
- `.github/workflows/` CI/CD pipeline setup using GitHub Actions
- `Fixtures/` Setup code that runs before tests
- `pages/` Page files with UI selectors and actions
- `specs/` End-to-end test files
- `testData/` Sample data used in tests
- `playwright.config.ts` Playwright configuration file

* ## 🧪 Test Coverage
This test covers the full user flow from account creation to confirming an order:
1. Open the website homepage
2. Go to the registration page
3. Fill in user details and create a new account
4. Enter personal information
5. Submit and confirm account creation
6. Navigate to the products page
7. Hover over a product to simulate user activity
8. Click on a product to view its details
9. Add the product to the shopping cart
10. Proceed to the checkout page
11. Fill in payment and delivery information
12. Confirm the order
13. Display the order confirmation message

* ## 🧪 Running Tests & Generating Reports
* ### ➡️ Local Test Execution using Terminal
- Run tests in headed mode:
```bash
  npx playwright test --headed
```
- Show HTML report:
```bash
  npx playwright show-report
```
- Generate and open Allure report:
```bash
  allure generate ./allure-results -o ./allure-report && allure open ./allure-report
```

* ### ➡️ CI/CD Execution and Reporting
Tests run automatically via GitHub Actions using:
```
.github/workflows/test.yml
```
* #### 🌐 playwright HTML Report
After execution:
1. Go to the *Actions* tab in your GitHub repo
2. Select the latest workflow run
3. Scroll to the *Artifacts* section
4. Download the `playwright-report.zip`
5. Unzip it locally
6. Open `index.html` inside the folder to view the report


