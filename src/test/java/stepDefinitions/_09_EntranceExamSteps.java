package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pages.DialogContent;
import pages.FormContent;
import pages.LeftNav;

import java.util.List;

public class _09_EntranceExamSteps {

    DialogContent dialogContent=new DialogContent();
    LeftNav leftNav=new LeftNav();
    FormContent formContent = new FormContent();

    @When("^User sends the keys in the form content class$")
    public void userSendsTheKeysInTheFormContentClass(DataTable elements) {
        List<List<String>>  elementsNameAndValue = elements.asLists(String.class);
        for(int i=0;i<elementsNameAndValue.size();i++) {

            formContent.findElementAndSendKeysFunction(elementsNameAndValue.get(i).get(0), elementsNameAndValue.get(i).get(1));
        }
    }

    @And("^Click on the element in the form content class$")
    public void clickOnTheElementInTheFormContentClass(DataTable elements) {
        List<String> elementsToClick = elements.asList(String.class);
        for(int i=0;i<elementsToClick.size();i++) {
//            if(strElement.contains("options")) {
//             System.out.println(formContent.optionsList.get(0).getText());
//               formContent.findElementAndSelectItemFromList(strElement, "2019-2020");
//             }
            formContent.findElementAndClickFunction(elementsToClick.get(i));
        }
    }

    @Given("^Navigate to back page$")
    public void navigateToBackPage() {
        formContent.navigateToBackPage();
    }
}

