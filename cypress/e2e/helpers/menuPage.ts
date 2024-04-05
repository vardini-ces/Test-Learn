class menuPage {
  addToCartItem(itemNumber: string): void {
    // const itemLocator = '[id="' + itemNumber + '"]';
    const itemAddToCartLocator =
      '[data-testid="add-to-cart-' + itemNumber + '"]';

    cy.get(itemAddToCartLocator).click();
  }
}

export default menuPage;
