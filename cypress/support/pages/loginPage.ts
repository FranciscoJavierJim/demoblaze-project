class loginPage {
  elements = {
    username: () => cy.get('#loginusername'),
    password: () => cy.get('#loginpassword'),
    loginButton: () => cy.get('#logInModal .btn-primary')
}

typeUsername(name: string) {
    this.elements.username().should('be.visible').type(name);
}

typePassword(password: string) {
    this.elements.password().should('be.visible').type(password);
}

clickLoginButton() {
    this.elements.loginButton().should('be.visible').click();
}

loginWithValidUser() {
    cy.fixture("demoblazaUser").then((user) => {
      this.typeUsername(user.username);
      this.typePassword(user.password);
      this.clickLoginButton();
    });
}
}

export default new loginPage();
