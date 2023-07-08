// import { expect } from "@playwright/test";
const { expect } = require("@playwright/test");

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.expect = expect;
    this.checkoutButton = page.locator("//button[text()='Checkout']");

    this.dropdownMonth = page.locator("(//select[@class='input ddl'])[1]");
    this.dropdownDay = page.locator("(//select[@class='input ddl'])[2]");
    this.cvvCodeField = page.locator(
      "//div[@class='field small']/input[@class='input txt']"
    );
    this.applyCouponField = page.locator(
      "//div[@class='field small']/input[@name='coupon']"
    );

    this.nameOfCardField = page.locator(
      "//div[@class='field']/input[@class='input txt']"
    );

    this.applyCouponButton = page.locator(
      "//div[@class='field small']/button[@type='submit']"
    );

    this.selectCountry = page.locator("input[placeholder*='Country']");

    this.options = page.locator(".ta-results");

    this.locatEmail = page.locator(
      "//div[@class='user__name mt-5']/label[@type='text']"
    );

    this.placeOrderButton = page.locator(".actions a");
  }

  async checkOutAddedPrduct(productName) {
    const VisibalCheck = await this.page
      .locator("h3:has-text('" + productName + "')")
      .isVisible();

    console.log("VisibalCheck :" + VisibalCheck);
    this.expect(VisibalCheck).toBeTruthy();

    await this.checkoutButton.click();
  }

  async paymentMethodDetails(
    dropdownMonthV,
    dropdownDayV,
    cvvCodeFieldV,
    nameOfCardFieldV,
    applyCouponFieldV,
    countryV,
    email
  ) {
    // await this.dropdownMonth.selectOption("7");
    // await this.dropdownDay.selectOption("18");
    await this.cvvCodeField.fill(cvvCodeFieldV);
    await this.nameOfCardField.fill(nameOfCardFieldV);
    await this.applyCouponField.fill(applyCouponFieldV);
    await this.applyCouponButton.click();
    await this.page.locator("p:has-text('Coupon Applied')").waitFor();
    const coupon = await this.page
      .locator("p:has-text('Coupon Applied')")
      .isVisible();
    this.expect(coupon).toBeTruthy();
    await this.selectCountry.type(countryV, { delay: 300 });

    await this.options.waitFor();
    const count = await this.options.locator("button").count();
    console.log(count);

    for (let i = 0; i < count; i++) {
      const item = await this.options.locator("button").nth(i).textContent();
      if (item === " Australia") {
        this.options.locator("button").nth(i).click();
        break;
      }
    }
    await this.expect(this.locatEmail).toHaveText(email);
    await this.placeOrderButton.click();
  }
}

// export default CheckoutPage;
module.exports = { CheckoutPage };
