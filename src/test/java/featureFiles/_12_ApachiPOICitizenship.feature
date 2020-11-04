Feature: ApachePOI Citizenship Functionality

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully
    And Navigate to Citizenship page

  Scenario: Create and delete citizenship from Excel
    When User create citizenship with ApcahePOI
    Then User delete citizenship with ApachePOI
