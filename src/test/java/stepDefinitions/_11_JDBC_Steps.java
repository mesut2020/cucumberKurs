package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pages.DialogContent;
import pages._Parent;
import utilities.DBUtility;

import java.util.ArrayList;
import java.util.List;

public class _11_JDBC_Steps {

    DialogContent dialogContent = new DialogContent();

    @When("^send the query to database \"([^\"]*)\" and control match$")

    public void sendTheQueryToDatabaseAndControlMatch(String query) {
        List<List<String>> dbList = DBUtility.getListData(query);

        List<WebElement> uiList = dialogContent.waitVisibleListAllElement(dialogContent.nameList);

        System.out.println(dbList);

        for (int i = 0; i < dbList.size(); i++) {
            System.out.println(dbList.get(i).get(0)+" : " +uiList.get(i).getText());
        Assert.assertEquals(dbList.get(i).get(0),uiList.get(i).getText());
        }

        for (int i = 0; i < dbList.size(); i++) {
            int x=0;
            for (int j = 0; j < uiList.size(); j++) {
                if(dbList.get(i).get(0).contains(uiList.get(j).getText())) x++;
                //break; // bu olursa calsimiyor ?????????????????
            }
            System.out.println(dbList.get(i).get(0)+" : " +uiList.get(i).getText());
            Assert.assertEquals(x, 1);
        }

    }

    @When("^enter a country name \"([^\"]*)\"$")
    public void enterACountryName(String countryName) {
        dialogContent.findElementAndClickFunction("countryName");
        dialogContent.findElementAndClickFunction(countryName);
    }
}
