package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import pages.DialogContent;
import pages.LeftNav;

public class _07_ItemCategoriesSteps {
    LeftNav leftNav = new LeftNav();
    DialogContent dialogContent=new DialogContent();
    @And("^Navigate to Categories page$")
    public void navigateToCategoriesPage() {
        leftNav.findElementAndClickFunction("inventory");
        leftNav.findElementAndClickFunction("setupButtonUnderInventory");
        leftNav.findElementAndClickFunction("itemCategory");
    }

    @When("^User create an item categories name as \"([^\"]*)\"user type as \"([^\"]*)\"$")
    public void userCreateAnItemCategoriesNameAsUserTypeAs(String itemName, String itemCategory) {
        dialogContent.findElementAndClickFunction("addButton");
        dialogContent.findElementAndSendKeysFunction("nameInput", itemName);
        dialogContent.findElementAndClickFunction("userTypeDropdown");

        // select ile ilgili kisim icin dialogContent te bir fonksiyon yazilip burada cagirilacak
        dialogContent.findElementAndSelectItemFromList("userTypeAllOptions",itemCategory);

        dialogContent.findElementAndClickFunction("saveButton");

    }
}
