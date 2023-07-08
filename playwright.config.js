const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,

  reporter: [["line"], ["html"], ["allure-playwright"]],

  expect: {
    timeout: 7000,
  },
  use: {
    trace: "on",
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    video: "on",

    viewport: {
      width: 1920,
      height: 1080,
    },
  },
});
