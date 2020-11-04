Feature: Country Multi Scenario
# Senaryolarin ilk bastaki ortak olan kisimlari Background olarak yazilabilir.
# Aralarda veya son kisimda ortak olan YAZILMAZ. Sadece bastakiler yazilir
  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully
    And Navigate to country page

  Scenario: Create a country

    When Create a country
    Then Success message should be displayed


  Scenario: Create a country parameter data

    When Create a country name as "Kafdagi Ulkesi49" and code as "KD49"
    Then Success message should be displayed



