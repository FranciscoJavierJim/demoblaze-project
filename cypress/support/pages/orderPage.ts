class orderPage {
    elements = {
        name_input: () => cy.get('#name'),
        country_input: () => cy.get('#country'),
        city_input: () => cy.get('#city'),
        creditCard_input: () => cy.get('#card'),
        month_input: () => cy.get('#month'),
        year_input: () => cy.get('#year'),
        purchaseButton: () => cy.contains('button', 'Purchase'),
        success_message: () => cy.get('.sweet-alert')
    }

    completeOrderForm() {
        cy.fixture("clientData").then((data) => {
            this.elements.name_input().type(data.name);
            this.elements.country_input().type(data.country);
            this.elements.city_input().type(data.city);
            this.elements.creditCard_input().type(data.creditCard);
            this.elements.month_input().type(data.month);
            this.elements.year_input().type(data.year);
        });
    }

    completePurchase() {
        this.elements.purchaseButton().click();
    }

    verifyPurchaseMessage() {
        this.elements.success_message().should('contain.text', 'Thank you for your purchase');
    }
}

export default new orderPage();



