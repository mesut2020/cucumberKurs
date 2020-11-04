package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LeftNav extends _Parent {

    WebElement myElement;

    public LeftNav(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "(//span[text()='Setup'])[1]")
    private WebElement setupOne;

    @FindBy(xpath = "//span[text()='Parameters']")
    private WebElement parameters;

    @FindBy(xpath = "//span[text()='Countries']")
    private WebElement countries;

    @FindBy(xpath = "//span[text()='Citizenships']")
    private WebElement citizenships;

    @FindBy(xpath = "//span[text()='Nationalities']")
    private WebElement nationality;

    @FindBy(xpath = "(//span[text()='Fees'])[1]")
    private WebElement fees;

    @FindBy(xpath = "(//span[text()='Entrance Exams'])[1]")
    private WebElement entranceExamsParent;

    @FindBy(xpath = "(//span[text()='Setup'])[2]")
    private WebElement setupEntranceExam;

    @FindBy(xpath = "(//span[text()='Entrance Exams'])[2]")
    private WebElement entranceExamsChild;

    @FindBy(xpath = "//span[text()='Inventory']")
    private WebElement inventory;

    @FindBy(xpath = "(//span[text()='Setup'])[4]")
    private WebElement setupButtonUnderInventory;

    @FindBy(xpath = "//span[text()='Item Categories']")
    private WebElement itemCategory;

    @FindBy(xpath = "//span[text()='Student']")
    private WebElement studentParent;

    @FindBy(xpath = "//span[text()='Students']")
    private WebElement studentsChild;




    public void findElementAndClickFunction(String elementName){
        switch(elementName){
            case "setupOne" :  myElement=setupOne;break;
            case "parameters" :  myElement=parameters;break;
            case "countries" :  myElement=countries;break;
            case "citizenships" :  myElement=citizenships;break;
            case "nationality" :  myElement=nationality;break;
            case "inventory" :  myElement=inventory;break;
            case "setupButtonUnderInventory" :  myElement=setupButtonUnderInventory;break;
            case "itemCategory" :  myElement=itemCategory;break;
            case "fees" :  myElement=fees;break;
            case "entranceExamsParent" :  myElement=entranceExamsParent;break;
            case "setupEntranceExam" :  myElement=setupEntranceExam;break;
            case "entranceExamsChild" :  myElement=entranceExamsChild;break;
            case "studentParent" :  myElement=studentParent;break;
            case "studentsChild" :  myElement=studentsChild;break;

        }
       clickFunction(myElement);
    }




}
