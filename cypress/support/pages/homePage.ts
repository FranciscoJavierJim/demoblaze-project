class homePage {
  elements = {
    home_menuItem: () => cy.get('a.nav-link[href="index.html"]'),
    cart_menuItem: () => cy.get('#cartur'),
    login_menuItem: () => cy.get('#login2'),
    product_link: (name: string) => cy.contains('.hrefch', name)
  };

clickHome() {
    this.elements.home_menuItem().should('be.visible').click()
}

clickCart() {
    this.elements.cart_menuItem().should('be.visible').click()
}

clickLogin() {
    this.elements.login_menuItem().should('be.visible').click()
}

selectProduct(name: string) {
    this.elements.product_link(name).should('be.visible').click();
}

}
export default new homePage();
