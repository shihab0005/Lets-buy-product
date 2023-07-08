class DashboardPage {
  constructor(page) {
    // this.page = page;
    this.productCards = page.locator(".card-body");
    this.navigateCart = page.locator("[routerlink*=cart]");
  }

  async searchProductAddToCart(productName) {
    const productsLen = await this.productCards.count();

    for (let i = 0; i < productsLen; i++) {
      if (
        (await this.productCards.nth(i).locator("b").textContent()) ===
        productName
      ) {
        await this.productCards.nth(i).locator("text = Add To Cart").click();
        break;
      }
    }
  }

  async navigateToCart() {
    await this.navigateCart.click();
  }
}

// export default DashboardPage;
module.exports = { DashboardPage };
