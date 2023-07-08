class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = "https://rahulshettyacademy.com/client";
    this.signInButton = page.locator("//input[@id='login']");
    this.emailField = page.locator("#userEmail");
    this.passwordField = page.locator("#userPassword");
    this.container = page.locator("#products");
  }

  async goToLink() {
    await this.page.goto(this.url);
  }

  async loginValidation(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState("networkidle");
    await this.container.waitFor();
  }
}

// export default LoginPage;
module.exports = { LoginPage };
