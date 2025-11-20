class orderPage {
    elements = {
        name: () => cy.get('#name'),
        country: () => cy.get('#country'),
        city: () => cy.get('#city'),
        creditCard: () => cy.get('#card'),
        month: () => cy.get('#month'),
        year: () => cy.get('#year'),
        purchaseButton: () => cy.contains('button', 'Purchase'),
        confirmation: () => cy.get('.sweet-alert')
    }

    completeOrderForm() {
        cy.fixture("clientData").then((data) => {
            this.elements.name().type(data.name);
            this.elements.country().type(data.country);
            this.elements.city().type(data.city);
            this.elements.creditCard().type(data.creditCard);
            this.elements.month().type(data.month);
            this.elements.year().type(data.year);
        });
    }

    completePurchase() {
        this.elements.purchaseButton().click();
    }

    verifyPurchaseMessage() {
        this.elements.confirmation().should('contain.text', 'Thank you for your purchase');
    }
}

export default new orderPage();



