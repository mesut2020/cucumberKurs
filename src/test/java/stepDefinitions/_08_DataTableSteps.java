package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pages.DialogContent;
import pages.FormContent;
import pages.LeftNav;
import utilities.Driver;

import java.util.List;

public class _08_DataTableSteps {

    DialogContent dialogContent=new DialogContent();
    LeftNav leftNav=new LeftNav();
    FormContent formContent = new FormContent();

    @And("^Click on the element in the left class$")
    public void clickOnTheElementInTheLeftClass(DataTable elements) {

        List<String> elementsToClick = elements.asList(String.class);

        for(int i=0;i<elementsToClick.size();i++) {

            System.out.println(   elementsToClick.get(i)   );
            leftNav.findElementAndClickFunction(elementsToClick.get(i));
        }
    }

    @And("^Click on the element in the content class$")
    public void clickOnTheElementInTheContentClass(DataTable elements) {

        List<String> elementsToClick = elements.asList(String.class);

        for(int i=0;i<elementsToClick.size();i++) {

            System.out.println(   elementsToClick.get(i)   );
            dialogContent.findElementAndClickFunction(elementsToClick.get(i));
        }
    }


    @When("^User sends the keys in the dialog content class$")
    public void userSendsTheKeysInTheDialogContentClass(DataTable elements) {
        List< List<String> >  elementsNameAndValue = elements.asLists(String.class);

        for(int i=0;i<elementsNameAndValue.size();i++) {

            System.out.println(elementsNameAndValue.get(i).get(0)); // elemanın adı
            System.out.println(elementsNameAndValue.get(i).get(1)); // elemanın gönderilecek değeri

//             | nameInput | ismetCountry |    elementsNameAndValue.get(i).get(0)   i.satırdaki 0.eleman yani nameInput,
//                                             elementsNameAndValue.get(i).get(1)   i.satırdaki 1.eleman yani ismetCountry,
//             | codeInput | 123          |    elementsNameAndValue.get(i).get(0)   i.satırdaki 0.eleman yani codeInput,
//                                             elementsNameAndValue.get(i).get(1)   i.satırdaki 1.eleman yani 123,

            dialogContent.findElementAndSendKeysFunction(elementsNameAndValue.get(i).get(0), elementsNameAndValue.get(i).get(1));
        }
    }

    @And("^Click on the element in the form class$")
    public void clickOnTheElementInTheFormClass(DataTable elements) {
        List<String> elementsToClick = elements.asList(String.class);
        for (String strElement : elementsToClick) {
//            if(strElement.contains("options")) {
//             System.out.println(formContent.optionsList.get(0).getText());
//               formContent.findElementAndSelectItemFromList(strElement, "2019-2020");
//             }
            formContent.findElementAndClickFunction(strElement);
        }
    }


}

