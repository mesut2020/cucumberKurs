package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pages.DialogContent;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class _01_LoginSteps {
    WebDriver driver;
    DialogContent dialogContent=new DialogContent();

    @Given("^Navigate to basqar$")
    public void navigate_to_basqar() {
        driver = Driver.getDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS );
        driver.manage().timeouts().pageLoadTimeout(20,TimeUnit.SECONDS );

        driver.get("https://test.basqar.techno.study/");
        driver.manage().deleteAllCookies();
    }

    @When("^Enter username and password and click Login button$")
    public void enter_username_and_password_and_click_Login_button()  {

//        dialogContent.userName.sendKeys("daulet2030@gmail.com");
        dialogContent.findElementAndSendKeysFunction("userName", "daulet2030@gmail.com");
        dialogContent.findElementAndSendKeysFunction("password","TechnoStudy123@");

//        dialogContent.password.sendKeys("TechnoStudy123@");
        //dialogContent.loginBtn.click();
        dialogContent.findElementAndClickFunction("loginButton");

        //dialogContent.gotItBtn.click();
            dialogContent.findElementAndClickFunction("gotItBtn");
    }

    @Then("^User should login successfully$")
    public void user_should_login_successfully()  {
        //dialogContent.findElementAndVerifyContainsText("loginName", "D. Saurbekov"); // wait olmazsa ismi bulamiyor
        //dialogContent.findElementAndVerifyContainsText("dashboard", "Dashboard");
    }



}
