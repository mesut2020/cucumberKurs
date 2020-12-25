Feature: Country create-edit-delete functionality
# Senaryolarin ilk bastaki ortak olan kisimlari Background olarak yazilabilir.
# Aralarda veya son kisimda ortak olan YAZILMAZ. Sadece bastakiler yazilir
  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully
    And Navigate to country page
  @SmokeTest
  Scenario: Create a country
    When Create a country name as "BundesRepublik Deutschland8" and code as "D8"
    Then Success message should be displayed
  @SmokeTest
  Scenario: Edit a country
    When User edit the "BundesRepublik Deutschland8" to "Germany8"
    Then Success message should be displayed
  @SmokeTest
  Scenario: Delete a country
    When User delete the "Germany8"
    Then Success message should be displayed