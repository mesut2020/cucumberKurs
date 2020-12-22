Feature: Testing JDBC Country Functionality

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully
    And Navigate to country page

  Scenario: Country tetsing with JDBC

    When send the query to database "SELECT name FROM country ORDER BY id DESC;" and control match