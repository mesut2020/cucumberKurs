package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DialogContent;
import pages.LeftNav;

public class _02_CountrySteps {
    LeftNav leftNav = new LeftNav();
    DialogContent dialogContent = new DialogContent();

    @Then("^Navigate to country page$")
    public void navigate_to_country_page() {
        leftNav.findElementAndClickFunction("setupOne");
        leftNav.findElementAndClickFunction("parameters");
        leftNav.findElementAndClickFunction("countries");
    }

    @And("^Navigate to city page$")
    public void navigateToCityPage() {
        leftNav.findElementAndClickFunction("setupOne");
        leftNav.findElementAndClickFunction("parameters");
        leftNav.findElementAndClickFunction("cities");
    }

    @When("^Create a country$")
    public void create_a_country() {
        dialogContent.findElementAndClickFunction("addButton");
        dialogContent.findElementAndSendKeysFunction("nameInput", "Bundesrepublik Deutschland49");
        dialogContent.findElementAndSendKeysFunction("codeInput", "D49");
        dialogContent.findElementAndClickFunction("saveButton");
    }

    @Then("^Success message should be displayed$")
    public void success_message_should_be_displayed() {

        dialogContent.findElementAndVerifyContainsText("message", "success");
//        int i=1;
//        while (true) {
//            dialogContent.clickFunction(dialogContent.deleteButton);
//            dialogContent.clickFunction(dialogContent.yesButton);
//
//            System.out.println(i++ + " ulke silindi");
//            dialogContent.findElementAndVerifyContainsText("message", "successfully");
//        }
    }


}
