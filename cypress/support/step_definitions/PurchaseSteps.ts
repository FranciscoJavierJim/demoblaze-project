import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import productPage from "../pages/productPage";
import cartPage from "../pages/cartPage";
import orderPage from "../pages/orderPage";
import 'cypress-mochawesome-reporter/cucumberSupport';

Given("the user is on the Demoblaze homepage", () => {
    cy.visit("https://demoblaze.com/index.html");
});

When("I go to Log in", () => {
    homePage.clickLogin();
});

When("I enter valid username", () => {
    cy.fixture("demoblazeUser").then((user) => {
        loginPage.typeUsername(user.username);
    });
});

When("I enter valid password", () => {
    cy.fixture("demoblazeUser").then((user) => {
        loginPage.typePassword(user.password);
    });
});

When("I click on Log in", () => {
    loginPage.clickLoginButton();
     cy.get('#logInModal').should('not.be.visible');
});

When("I select a product in main page", () => {
    homePage.selectProduct("Samsung galaxy s6");
});

When("I check the product and I press Add to cart", () => {
    productPage.checkProductAndAddToCart();
});

When("I read the pop-up message and I press the accept button", () => {
    productPage.handlePopUp();
});

When("I go to the cart section", () => {
    homePage.clickCart();
});

When("I check name and price of the product and I press Place Order", () => {
    cy.fixture("demoblazeUser").then(() => {
        cartPage.checkProductInCart("Samsung galaxy s6", "360");
    });
    cartPage.clickPlaceOrder();
});

When("I completed the questionnaire with real data.", () => {
    orderPage.completeOrderForm();
});

When("I press Purchase button", () => {
    orderPage.completePurchase();
});

Then('The message "Thank you for your purchase" should appear', () => {
    orderPage.verifyPurchaseMessage();
});

//

Given('the user is logged in with valid credentials', () => {
  cy.fixture('demoblazeUser').then((user) => {
    cy.visit('https://demoblaze.com/index.html');
    homePage.clickLogin();
    loginPage.typeUsername(user.username);
    loginPage.typePassword(user.password);
    loginPage.clickLoginButton();
    cy.get('#logInModal').should('not.be.visible');
  });
});

Given('a product is added to the cart', () => {
  homePage.selectProduct('Samsung galaxy s6');
  productPage.checkProductAndAddToCart();
  productPage.handlePopUp();
});

When('the user completes the checkout process', () => {
  homePage.clickCart();
  cy.fixture('demoblazeUser').then(() => {
    cartPage.checkProductInCart('Samsung galaxy s6', '360');
  });
  cartPage.clickPlaceOrder();
  orderPage.completeOrderForm();
  orderPage.completePurchase();
});

Then('the purchase is confirmed successfully', () => {
  orderPage.verifyPurchaseMessage();
});