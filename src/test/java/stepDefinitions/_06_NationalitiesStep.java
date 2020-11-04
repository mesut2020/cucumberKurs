package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import pages.DialogContent;
import pages.LeftNav;

public class _06_NationalitiesStep {
    DialogContent dialogContent = new DialogContent();
    LeftNav leftNav = new LeftNav();

    @And("^Navigate to Nationalities page$")
    public void navigateToNationalitiesPage() {
        leftNav.findElementAndClickFunction("setupOne");
        leftNav.findElementAndClickFunction("parameters");
        leftNav.findElementAndClickFunction("nationality");
    }

    @Then("^Create a Nationality name as \"([^\"]*)\"$")
    public void createANationalityNameAs(String name) {
        dialogContent.findElementAndClickFunction("addButton");
        dialogContent.findElementAndSendKeysFunction("nameInput", name);
        dialogContent.findElementAndClickFunction("saveButton");
    }
}
