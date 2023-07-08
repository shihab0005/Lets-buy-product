Feature: Ecommerce Validation

  Scenario Outline: Placing the order
    Given Login with Valid "<email>" and "<password>"
    When Add "<product>" to cart
    Then Verify "<product>" is Displayed in the cart
    When Enter Details information and place the order
    Then Verify Order in order history page 

    Examples:
        | email                  | password     | product        |
        | anshika@gmail.com      | Iamking@000  | zara coat 3    |
        | anshika@gmail.com      | Iamking@000  | iphone 13 pro  |