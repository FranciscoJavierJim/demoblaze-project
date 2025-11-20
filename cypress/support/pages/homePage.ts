class homePage {
  elements = {
    home: () => cy.get('a.nav-link[href="index.html"]'),
    cart: () => cy.get('#cartur'),
    login: () => cy.get('#login2'),
    product: (name: string) => cy.contains('.hrefch', name)
  };

clickHome() {
    this.elements.home().should('be.visible').click()
}

clickCart() {
    this.elements.cart().should('be.visible').click()
}

clickLogin() {
    this.elements.login().should('be.visible').click()
}

selectProduct(name: string) {
    this.elements.product(name).should('be.visible').click();
}

}
export default new homePage();
