package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FormContent extends _Parent{

    WebElement myElement;
    List<WebElement> myElementList;

    public FormContent(){
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//ms-text-field[@formcontrolname='name']/input")
    private WebElement nameInput;

    @FindBy(xpath = "(//span[text()='Academic Period'])[1]")
    private WebElement academicPeriod;

    @FindBy(xpath = "(//span[text()='Grade Level'])[1]")
    private WebElement gradeLevel;

    @FindBy(xpath = "(//span[text()='Document Type'])[1]")
    private WebElement documentType;

    @FindBy(xpath = "(//mat-option[@role='option'])[1]")
    private WebElement option1;

    @FindBy(xpath = "(//mat-option[@role='option'])[2]")
    private WebElement option2;

    @FindBy(xpath = "(//mat-option[@role='option'])[3]")
    private WebElement option3;

    @FindBy(xpath = "(//mat-option[@role='option'])[4]")
    private WebElement option4;

    @FindAll({@FindBy(css = "mat-option[role='option']")})
    public List<WebElement> optionsList;

    @FindBy(css = "div[fxflexalign='end center']")
    private WebElement formAddButton;

    @FindBy(xpath = "//span[text()=' Add ']")
    private WebElement representativeAddButton;

    @FindBy(xpath = "//ms-save-button//button")
    private WebElement formSaveButton;

    @FindBy(css = "ms-text-field[formcontrolname='firstName']>input")
    private WebElement firstName;

    @FindBy(css = "ms-text-field[formcontrolname='lastName']>input")
    private WebElement lastName;

    @FindBy(css = "input[formcontrolname='firstName']")
    private WebElement firstNameRep;

    @FindBy(css = "input[formcontrolname='lastName']")
    private WebElement lastNameRep;

    @FindBy(css = "input[data-placeholder='Date of Birth']")
    private WebElement birthDate;

    @FindBy(css = "input[formcontrolname='studentId']")
    private WebElement studentID;

    @FindBy(xpath = "//span[text()='Gender']")
    private WebElement gender;

    @FindBy(xpath = "//span[text()='School Department']")
    private WebElement schoolDepartment;

    @FindBy(xpath = "//span[text()='Section']")
    private WebElement section;

    @FindBy(xpath = "//span[text()='Citizenship']")
    private WebElement citizinship;

    @FindBy(xpath = "//span[text()='Nationality']")
    private WebElement nationality;

    @FindBy(xpath = "//span[text()='Representative']")
    private WebElement representative;

    @FindBy(css = "mat-form-field[formgroupname='country']")
    private WebElement country;

    @FindBy(css = "mat-form-field[formgroupname='city']")
    private WebElement city;

    @FindBy(css = "input[data-placeholder='Mobile Phone']")
    private WebElement mobilePhone;

    @FindBy(css = "input[formcontrolname='phone']")
    private WebElement mobilePhoneRep;

    @FindBy(css = "input[data-placeholder='Email']")
    private WebElement email;

    @FindBy(css = "input[formcontrolname='previousSchoolName']")
    private WebElement previousSchool;

    @FindBy(xpath="//div[text()='Representatives']")
    private WebElement representatives;

    @FindBy(xpath = "//span[text()='Document Type']")
    private WebElement studentDocumentType;

    @FindBy(xpath = "//input[@formcontrolname='documentNumber']")
    private WebElement studentDocumentNumber;

    @FindBy(xpath = "button[onclick='this.blur()']")
    private WebElement addPhoto;



    public void findElementAndClickFunction(String elementName) {

        switch (elementName) {
            case "academicPeriod": myElement = academicPeriod; break;
            case "gradeLevel": myElement = gradeLevel; break;
            case "documentType": myElement = documentType; break;
            case "option1": myElement = option1; break;
            case "option2": myElement = option2; break;
            case "option3": myElement = option3; break;
            case "option4": myElement = option4; break;
            case "formAddButton": myElement = formAddButton; break;
            case "formSaveButton": myElement = formSaveButton; break;
            case "representativeAddButton": myElement = representativeAddButton; break;
            case "gender": myElement = gender; break;
            case "schoolDepartment": myElement = schoolDepartment; break;
            case "section": myElement = section; break;
            case "citizinship": myElement = citizinship; break;
            case "nationality": myElement = nationality; break;
            case "representatives": myElement = representatives; break;
            case "representative": myElement = representative; break;
            case "country": myElement = country; break;
            case "city": myElement = city; break;
            case "studentDocumentType": myElement = studentDocumentType; break;
            case "addPhoto": myElement = addPhoto; break;

        }
        clickFunction(myElement);
    }

    public void findElementAndSendKeysFunction(String elementName, String value) {
        switch (elementName) {
            case "nameInput": myElement = nameInput; break;
            case "firstName": myElement = firstName; break;
            case "lastName": myElement = lastName; break;
            case "firstNameRep": myElement = firstNameRep; break;
            case "lastNameRep": myElement = lastNameRep; break;
            case "birthDate": myElement = birthDate; break;
            case "studentID": myElement = studentID; break;
            case "mobilePhone": myElement = mobilePhone; break;
            case "mobilePhoneRep": myElement = mobilePhoneRep; break;
            case "email": myElement = email; break;
            case "previousSchool": myElement = previousSchool; break;
            case "studentDocumentNumber": myElement = studentDocumentNumber; break;


        }
        sendKeysFunction(myElement, value);
    }

    public void findElementAndSelectItemFromList(String elementListName,String item) {
        switch(elementListName){
            case "options" : myElementList=optionsList; break;
        }
        selectItemFromList(item, myElementList);
    }
}
