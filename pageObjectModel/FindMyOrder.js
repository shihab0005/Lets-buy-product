class FindMyOrder {
  constructor(page) {
    this.page = page;
    this.myOrderId = page.locator(".em-spacer-1 .ng-star-inserted");
    this.OrdersButton = page.locator("button[routerlink*='myorders']");
    this.rowsOfOrderTable = page.locator("tbody tr");
  }

  async findOrderForm() {
    const OrderId = await this.myOrderId.textContent();
    console.log(OrderId);

    await this.OrdersButton.click();

    await this.page.locator("tbody").waitFor();
    const len = await this.rowsOfOrderTable.count();
    console.log(len);

    for (let i = 0; i < len; i++) {
      const orderIdTable = await this.rowsOfOrderTable
        .nth(i)
        .locator("th")
        .textContent();

      if (OrderId.includes(orderIdTable)) {
        console.log("Successfully confirm the order");
        await this.rowsOfOrderTable
          .nth(i)
          .locator("//button[text()='View']")
          .click();
      }
    }
  }
}
// export default FindMyOrder;
module.exports = { FindMyOrder };
