class productPage {
    elements = {
        productName: () => cy.get('.name'),
        productPrice: () => cy.get('.price-container'),
        addToCartButton: () => cy.contains('a', 'Add to cart')
    }

    checkProductAndAddToCart() {
        this.elements.productName().should('be.visible');
        this.elements.productPrice().should('be.visible');
        this.elements.addToCartButton().click();
    }

    handlePopUp() {
        cy.on('window:alert', (str) => {
        expect(str).to.eq('Product added.');
        });
    }
}

export default new productPage();