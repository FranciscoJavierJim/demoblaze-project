Feature: Purchase with log in in demoblaze.com
  Background: 
    Given the user is on the Demoblaze homepage

  @successfulPurchase @imperative
  Scenario: Successful purchase process with valid username and password
    When I go to Log in
    And I enter valid username
    And I enter valid password
    And I click on Log in
    And I select a product in main page
    And I check the product and I press Add to cart
    And I read the pop-up message and I press the accept button
    And I go to the cart section
    And I check name and price of the product and I press Place Order
    And I completed the questionnaire with real data.
    And I press Purchase button
    Then The message "Thank you for your purchase" should appear

    
  @successfulPurchase @declarative
  Scenario: User successfully completes a purchase
    Given the user is logged in with valid credentials
    And a product is added to the cart
    When the user completes the checkout process
    Then the purchase is confirmed successfully