Feature: Citizenship with scenario outline

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully
    And Navigate to Citizenship page

  Scenario Outline: Citizenship create and delete
    When User create a citizenship name as "<CitizenshipName>" , short name as "<CitizenshipShortName>"
    Then Success message should be displayed

    When User create a citizenship name as "<CitizenshipName>" , short name as "<CitizenshipShortName>"
    Then Error message should be displayed
    And Click on close button

    Then User delete the "<CitizenshipName>"
    Then Success message should be displayed


    Examples:
      | CitizenshipName | CitizenshipShortName |
      | Deutsch777      | de777                |
      | Turk777         | tr777                |
      | Mongol777       | mng777               |
