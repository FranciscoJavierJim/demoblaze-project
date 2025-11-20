class loginPage {
  elements = {
    username_input: () => cy.get('#loginusername'),
    password_input: () => cy.get('#loginpassword'),
    loginButton: () => cy.get('#logInModal .btn-primary')
}

typeUsername(name: string) {
    this.elements.username_input().should('be.visible').type(name);
}

typePassword(password: string) {
    this.elements.password_input().should('be.visible').type(password);
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
