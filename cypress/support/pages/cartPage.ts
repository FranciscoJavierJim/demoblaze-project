class cartPage {
    elements = {        
        placeOrderButton: () => cy.contains('button', 'Place Order')
    };

    checkProductInCart(productName: string, productPrice: string) {
        cy.contains('td', productName).should('be.visible');
        cy.contains('td', productPrice).should('be.visible');
  }

    clickPlaceOrder() {
        this.elements.placeOrderButton().click();
  }
}

export default new cartPage();