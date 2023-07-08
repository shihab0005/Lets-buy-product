const {
  Before,
  After,
  BeforeStep,
  AfterStep,
  Status,
} = require("@cucumber/cucumber");

const playwright = require("@playwright/test");
const { POManager } = require("../../../pageObjectModel/POManager");

Before(async function () {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  this.page = await context.newPage();

  this.poManager = new POManager(this.page);
});

After(function () {
  console.log("Execute All Task and Close Browser");
});

BeforeStep(function () {
  console.log("Step will Start");
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    await this.page.screenshot({ path: "features/Screenshot/scr1.png" });
  }
});
