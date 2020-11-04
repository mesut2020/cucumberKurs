#Senaryo ;
#1- siteyi açınız.
#2- username ve password u gönderin ve Login butonuna tıklatın.
#3- Login olduğunuzu doğrulayın.

Feature: Login Functionality

  @SmokeTest @RegressionTest
  Scenario: Login with valid username and password

    #    siteyi ac - basqaara git
    Given Navigate to basqar
    #    username ve password girip, logine tiklayin
    When Enter username and password and click Login button
    #    Login oldugunu dogrula
    Then User should login successfully

    # Gherkin dilinde 4 kelime var. Given, When, And ve Then
    #   Senaryo nun adimlarini manali bir sekilde birbirine baglamak icin kullailiyor
    #  Hic bir seyi etkilemiyor
    #  Amac: Teknik olmayan personelin senaryoya bakarak testin ne yaptigini anlamasi...