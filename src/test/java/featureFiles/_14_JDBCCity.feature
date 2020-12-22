Feature: Testing JDBC City Functionality

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully
    And Navigate to city page

  Scenario: City tetsing with JDBC

    When enter a country name "MNG Mongolia"

    Then send the query to database "SELECT name FROM city;" and control match