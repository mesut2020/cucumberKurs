package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.ArrayList;
import java.util.List;

public class DialogContent extends _Parent {
    WebElement myElement;
    List <WebElement> myElementList;

    //buradaki driver silindi çünkü Parentten geliyor.gerek kalmadı
    public DialogContent() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "Got it!")
    private WebElement gotItBtn;
    @FindAll({ @FindBy(linkText = "Got it!") })
    private List<WebElement> gotItBtns;

    @FindBy(id = "mat-input-0")
    private WebElement userName;

    @FindBy(id = "mat-input-1")
    private WebElement password;

    @FindBy(css = "button[aria-label='LOGIN']")
    private WebElement loginBtn;

    @FindBy(css = "span.username.mr-12")
    private WebElement loginName;

    @FindBy(xpath = "//span[text()='Dashboard']")
    private WebElement dashboard;

    @FindBy(xpath = "//ms-add-button[contains(@tooltip,'ADD')]//button")
    private WebElement addButton;

    @FindBy(xpath = "//ms-text-field[@formcontrolname='name']/input")
    private WebElement nameInput;

    @FindBy(xpath = "//ms-text-field[@formcontrolname='code']/input")
    private WebElement codeInput;

    @FindBy(xpath = "//ms-save-button//button")
    private WebElement saveButton;

    @FindBy(css = "div#toast-container")
    private WebElement message;

  @FindAll(  { @FindBy(css = "div#toast-container")    })
    private List <WebElement> messages;

    @FindBy(xpath = "(//ms-delete-button[@class='ng-star-inserted'])[3]")
    public WebElement deleteButton;

    @FindBy(xpath = "//span[text()=' Yes ']")
    private WebElement yesButton;

    @FindBy(xpath = "//ms-text-field[@formcontrolname='shortName']/input")
    private WebElement shortName;

    @FindBy(xpath = "//button[@aria-label='Close dialog']")
    private WebElement closeDialog;

    @FindBy(xpath = "//ms-text-field[@formcontrolname='budgetAccountIntegrationCode']/input")
    private WebElement integrationCode;

    @FindBy(xpath = "//ms-text-field[@formcontrolname='priority']/input")
    private WebElement priority;

    @FindAll({
            @FindBy(xpath = "//table/tbody/tr/td[2]")
    })
    public List<WebElement> nameList;

    @FindAll({
            @FindBy(xpath = "//table/tbody/tr/td[3]")
    })
    public List<WebElement> studentNameList;

    @FindAll({
            @FindBy(xpath = "//ms-edit-button/button")
    })
    public List<WebElement> editButtonList;

    @FindAll({
            @FindBy(xpath = "//ms-delete-button/button")
    })
    public List<WebElement> deleteButtonList;

    @FindBy(xpath = "//ms-text-field[@placeholder='GENERAL.FIELD.NAME']/input")
    private WebElement searchNameInput;

    @FindBy(xpath = "//ms-search-button//button")
    private WebElement searchButton;

    @FindBy(xpath = "//input[@class='mat-autocomplete-trigger mat-chip-input mat-input-element']")
    private WebElement userTypeDropdown;

    @FindAll({@FindBy(xpath = "//mat-option[@class='mat-option mat-focus-indicator ng-star-inserted']")})
    private List<WebElement> userTypeAllOptions;

    @FindBy(css="mat-select[role='combobox']")
    private WebElement itemsPerPage;

    @FindBy(xpath = "(//mat-option[@role='option'])[4]")
    private WebElement option4;


    public void findElementAndClickFunction(String elementName) {
        /**
         * Buraya tıklanacak butonun adı gönderilecek
         * Burada adından hangi eleman olduğu bulunuyor
         * ve sonra tıklanıyor.
         */
        switch (elementName) {
            case "loginButton": myElement = loginBtn;break;
            case "gotItBtn":   if (gotItBtns.size() == 0) return;myElement = gotItBtn; break;
            case "addButton": myElement = addButton; break;
            case "saveButton": myElement = saveButton;break;
            case "yesButton": myElement = yesButton;  break;
            case "closeDialog": myElement = closeDialog; break;
            case "searchButton": myElement = searchButton; break;
            case "userTypeDropdown": myElement = userTypeDropdown; break;
        }
        clickFunction(myElement);
    }

    public void findElementAndSendKeysFunction(String elementName, String value) {
        switch (elementName) {
            case "userName": myElement = userName; break;
            case "password": myElement = password; break;
            case "nameInput":myElement = nameInput; break;
            case "codeInput": myElement = codeInput; break;
            case "shortName": myElement = shortName; break;
            case "searchNameInput": myElement = searchNameInput; break;
            case "integrationCode": myElement = integrationCode; break;
            case "priority": myElement = priority; break;
        }
        sendKeysFunction(myElement, value);
    }

    public void findElementAndVerifyContainsText(String elementName, String expectedText) {

        switch (elementName) {
            case "dashboard": myElement = dashboard; break;
            case "loginName": myElement = loginName; break;
            case "message":  myElement = message;  break;
        }
        verifyElementContainsText(myElement, expectedText);
    }

    public void editAndDeleteFunction(String searchText, String editOderDelete) {
//        clickFunction(itemsPerPage);
//        clickFunction(option4);

        if (messages.size()>0) {
            if (message.isDisplayed())
                wait.until(ExpectedConditions.invisibilityOfAllElements(messages));
        }
        //wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//ms-edit-button/button"), 3));

        List<WebElement> btnList = new ArrayList<>();
        List<WebElement> tempNameList = new ArrayList<>();

        if (editOderDelete.equalsIgnoreCase("delete")) {
            btnList = deleteButtonList;tempNameList=nameList;
        }
        else if (editOderDelete.equalsIgnoreCase("edit")) {
            btnList = editButtonList;tempNameList=nameList;
        }
        else if (editOderDelete.equalsIgnoreCase("deleteStudent")) {
            btnList = deleteButtonList;
            tempNameList=studentNameList;
        }
        else if (editOderDelete.equalsIgnoreCase("editStudent")) {
            btnList = editButtonList;
            tempNameList=studentNameList;
        }

        System.out.println("tempNameList "  +tempNameList.size());

        for (int i = 0; i < tempNameList.size(); i++) {
          //  wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//table/tbody/tr/td[2]"), 5));
            if (tempNameList.get(i).getText().contains(searchText)) {
                System.out.print("Item has been found...");
                System.out.println(tempNameList.get(i).getText());
                clickFunction(btnList.get(i));
            }
//            else{
//                sendKeysFunction(searchNameInput, countryName);
//                clickFunction(searchButton);
//                clickFunction(btnList.get(0));
//            }
        }
    }

    public void findElementAndSelectItemFromList(String elementListName,String item) {
        switch(elementListName){
            case "userTypeAllOptions" : myElementList=userTypeAllOptions; break;
        }
        selectItemFromList(item, myElementList);
    }
}


