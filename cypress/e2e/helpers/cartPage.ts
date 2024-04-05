class cartPage {
  private readonly gst: number = 0.05;

  locators = {
    checkoutButtonWithTotal: '[data-testid="navigation-checkout-desktop"]',
  };

  url = "/cart";

  visit(): void {
    cy.visit(this.url);
  }

  verifyTotalAmount(prices: number[]): void {
    let sum: number = 0;

    prices.forEach((num) => {
      sum += num;
    });

    const totalWithGST: number = sum * (1 + this.gst);

    cy.get(this.locators.checkoutButtonWithTotal).contains(totalWithGST);
  }
}

export default cartPage;
