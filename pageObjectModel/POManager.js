const { CheckoutPage } = require("./CheckoutPage");
const { DashboardPage } = require("./DashboardPage");
const { FindMyOrder } = require("./FindMyOrder");
const { LoginPage } = require("./LoginPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
    this.findMyOrder = new FindMyOrder(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }
  getDashboardPage() {
    return this.dashboardPage;
  }
  getCheckoutPage() {
    return this.checkoutPage;
  }
  getFindMyOrder() {
    return this.findMyOrder;
  }
}
module.exports = { POManager };
