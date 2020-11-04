package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DialogContent;
import pages.LeftNav;

public class _05_CitizenshipSteps {
    LeftNav leftNav =new LeftNav();
    DialogContent dialogContent = new DialogContent();

    @And("^Navigate to Citizenship page$")
    public void navigateToCitizenshipPage() {
        leftNav.findElementAndClickFunction("setupOne");
        leftNav.findElementAndClickFunction("parameters");
        leftNav.findElementAndClickFunction("citizenships");
    }

    @When("^User create a citizenship name as \"([^\"]*)\" , short name as \"([^\"]*)\"$")
    public void userCreateACitizenshipNameAsShortNameAs(String name, String shortName) {

        dialogContent.findElementAndClickFunction("addButton");
        dialogContent.findElementAndSendKeysFunction("nameInput", name);
        dialogContent.findElementAndSendKeysFunction("shortName", shortName);
        dialogContent.findElementAndClickFunction("saveButton");

    }

    @Then("^Error message should be displayed$")
    public void errorMessageShouldBeDisplayed() {
        dialogContent.findElementAndVerifyContainsText("message", "error");
    }

    @And("^Click on close button$")
    public void clickOnCloseButton() {
        dialogContent.findElementAndClickFunction("closeDialog");
        dialogContent.findElementAndClickFunction("yesButton");
        dialogContent.findElementAndVerifyContainsText("message", "error");

    }
}
