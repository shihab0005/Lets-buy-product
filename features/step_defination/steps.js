const { Given, When, Then } = require("@cucumber/cucumber");
// import { Given, When, Then } from "@cucumber/cucumber";
const { POManager } = require("../../pageObjectModel/POManager");
const playwright = require("@playwright/test");

Given(
  "Login with Valid {string} and {string}",
  { timeout: 20 * 1000 },
  async function (email, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goToLink();
    await loginPage.loginValidation(email, password);
  }
);

When(
  "Add {string} to cart",
  { timeout: 20 * 1000 },
  async function (productName) {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddToCart(productName);
    await this.dashboardPage.navigateToCart();

    await this.page.locator("div li").first().waitFor();
  }
);

Then(
  "Verify {string} is Displayed in the cart",
  { timeout: 20 * 1000 },
  async function (productName) {
    this.checkoutPage = this.poManager.getCheckoutPage();
    await this.checkoutPage.checkOutAddedPrduct(productName);
  }
);

When(
  "Enter Details information and place the order",
  { timeout: 20 * 1000 },
  async function () {
    const dropdownMonthV = "9";
    const dropdownDayV = "25";
    const cvvCodeFieldV = "7384";
    const nameOfCardFieldV = "shihab";
    const applyCouponFieldV = "rahulshettyacademy";
    const countryV = "aus";
    const email = "anshika@gmail.com";
    await this.checkoutPage.paymentMethodDetails(
      dropdownMonthV,
      dropdownDayV,
      cvvCodeFieldV,
      nameOfCardFieldV,
      applyCouponFieldV,
      countryV,
      email
    );

    const dropdown1 = this.page.locator("(//select[@class='input ddl'])[1]");
    await dropdown1.selectOption("10");

    const dropdown2 = this.page.locator("(//select[@class='input ddl'])[2]");
    await dropdown2.selectOption("24");
  }
);

Then(
  "Verify Order in order history page",
  { timeout: 20 * 1000 },
  async function () {
    this.findMyOrder = this.poManager.getFindMyOrder();
    this.findMyOrder.findOrderForm();
  }
);
