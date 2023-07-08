import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");

  await page.fill("#userEmail", "anshika@gmail.com");
  await page.fill("#userPassword", "Iamking@000");
  await page.click("//input[@id='login']");
  await page.waitForLoadState("networkidle");
  // await page.pause();
  const locatCard = page.locator(".card-body");
  const productName = "iphone 13 pro";

  const productsLen = await locatCard.count();
  console.log(productsLen);

  for (let i = 0; i < productsLen; i++) {
    if ((await locatCard.nth(i).locator("b").textContent()) === productName) {
      await locatCard.nth(i).locator("text = Add To Cart").click();
      break;
    }
  }

  await page.click("[routerlink*=cart]");

  await page.locator("div li").first().waitFor();

  const VisibalCheck = await page
    .locator("h3:has-text('iphone 13 pro')")
    .isVisible();
  console.log(VisibalCheck);
  expect(VisibalCheck).toBeTruthy();

  await page.click("//button[text()='Checkout']");

  const dropdown1 = page.locator("(//select[@class='input ddl'])[1]");
  await dropdown1.selectOption("10");

  const dropdown2 = page.locator("(//select[@class='input ddl'])[2]");
  await dropdown2.selectOption("24");

  await page.fill(
    "//div[@class='field small']/input[@class='input txt']",
    "9456"
  );
  await page.fill("//div[@class='field']/input[@class='input txt']", "shihab");
  await page.fill(
    "//div[@class='field small']/input[@name='coupon']",
    "rahulshettyacademy"
  );
  await page.click("//div[@class='field small']/button[@type='submit']");
  await page.locator("p:has-text('Coupon Applied')").waitFor();
  const coupon = await page.locator("p:has-text('Coupon Applied')").isVisible();
  expect(coupon).toBeTruthy();

  await page
    .locator("input[placeholder*='Country']")
    .type("aus", { delay: 300 });

  const options = page.locator(".ta-results");

  await options.waitFor();
  const count = await options.locator("button").count();

  for (let i = 0; i < count; i++) {
    const item = await options.locator("button").nth(i).textContent();
    if (item === " Australia") {
      options.locator("button").nth(i).click();
      break;
    }
  }

  const locatEmail = page.locator(
    "//div[@class='user__name mt-5']/label[@type='text']"
  );
  await expect(locatEmail).toHaveText("anshika@gmail.com");
  await page.click(".actions a");

  await expect(page.locator(".hero-primary")).toHaveText(
    "Thankyou for the order."
  );

  const orderId = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log(orderId);

  await page.click("button[routerlink*='myorders']");

  // await page.pause();
  await page.locator("tbody").waitFor();
  const rows = page.locator("tbody tr");

  const len = await rows.count();
  console.log(len);

  for (let i = 0; i < len; i++) {
    const orderIdTable = await rows.nth(i).locator("th").textContent();

    if (orderId.includes(orderIdTable)) {
      console.log("Successfully confirm the order");
      await rows.nth(i).locator("//button[text()='View']").click();
    }
  }

  await page.pause();
});
