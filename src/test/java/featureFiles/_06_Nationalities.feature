Feature: Nationalities functionality

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully
    And Navigate to Nationalities page

  Scenario: Create Nationalities
    Then Create a Nationality name as "Japonishi"
    Then Success message should be displayed

  Scenario: Edit Nationalities
    Then User edit the "Japonishi" to "Japonishi2"
    Then Success message should be displayed

  Scenario: Delete Nationalities
    Then User delete the "Japonishi2"
    Then Success message should be displayed


  Scenario: Nationalities All functioanlity
    Then Create a Nationality name as "Japonishi"
    Then Success message should be displayed
    Then User edit the "Japonishi" to "Japonishi2"
    Then Success message should be displayed
    Then User delete the "Japonishi2"
    Then Success message should be displayed
