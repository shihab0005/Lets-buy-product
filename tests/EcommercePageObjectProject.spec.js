import { test } from "@playwright/test";
import TestData from "../utils/TestData.json";
// import POManager from "../pageObjectModel/POManager";
const { POManager } = require("../pageObjectModel/POManager");

for (const d of TestData) {
  test(`Login Test with ${d.productName}`, async ({ page }) => {
    const dropdownMonthV = "9";
    const dropdownDayV = "25";
    const cvvCodeFieldV = "7384";
    const nameOfCardFieldV = "shihab";
    const applyCouponFieldV = "rahulshettyacademy";
    const countryV = "aus";

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goToLink();
    await loginPage.loginValidation(d.email, d.password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddToCart(d.productName);
    await dashboardPage.navigateToCart();

    await page.locator("div li").first().waitFor();

    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.checkOutAddedPrduct(d.productName);
    await checkoutPage.paymentMethodDetails(
      dropdownMonthV,
      dropdownDayV,
      cvvCodeFieldV,
      nameOfCardFieldV,
      applyCouponFieldV,
      countryV,
      d.email
    );

    const dropdown1 = page.locator("(//select[@class='input ddl'])[1]");
    await dropdown1.selectOption("10");

    const dropdown2 = page.locator("(//select[@class='input ddl'])[2]");
    await dropdown2.selectOption("24");

    const findMyOrder = poManager.getFindMyOrder();
    findMyOrder.findOrderForm();

    // await page.pause();
  });
}
