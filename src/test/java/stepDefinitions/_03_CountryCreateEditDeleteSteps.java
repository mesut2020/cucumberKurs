package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import pages.DialogContent;

public class _03_CountryCreateEditDeleteSteps {

    DialogContent dialogContent = new DialogContent();

    @When("^Create a country name as \"([^\"]*)\" and code as \"([^\"]*)\"$")
    public void create_a_country_name_as_and_code_as(String name, String code) {
        dialogContent.findElementAndClickFunction("addButton");
        dialogContent.findElementAndSendKeysFunction("nameInput", name);
        dialogContent.findElementAndSendKeysFunction("codeInput", code);
        dialogContent.findElementAndClickFunction("saveButton");
    }

    @When("^User edit the \"([^\"]*)\" to \"([^\"]*)\"$")
    public void user_edit_the_to(String searchOfCountryName, String newCountryName) {
        // ulkeyi ara bul ve edit e tiklat
        dialogContent.editAndDeleteFunction(searchOfCountryName, "edit");
        dialogContent.findElementAndSendKeysFunction("nameInput", newCountryName);
        dialogContent.findElementAndClickFunction("saveButton");
    }


    @When("^User delete the \"([^\"]*)\"$")
    public void user_delete_the(String nameOfCountryToDelete) {
        dialogContent.editAndDeleteFunction(nameOfCountryToDelete, "delete");
        dialogContent.findElementAndClickFunction("yesButton");
    }

    @When("^User delete the student\"([^\"]*)\"$")
    public void userDeleteTheStudent(String studentFirstName) {
        dialogContent.editAndDeleteFunction(studentFirstName, "deleteStudent");
        dialogContent.findElementAndClickFunction("yesButton");
    }
}
