package pages;

import cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import utilities.Driver;
import utilities.ExcelUtility;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class _Parent{
    WebDriver driver;
    WebDriverWait wait;

    public _Parent(){
        /**
         * Bu dosya diğer bütün page ler için ortak click ve sendkeys
         * için nekleme, scroll ve clear gibi bütün işleleri tek yereden
         * yapabilmek için eklendi.Bu class diğer pageler tarafından exten edilerek
         * kullanılacak.Böylece tüm pagelerdeki elemanların click ve sendkeys özelliği
         * hem bekleme hem scroll hem de clear özelliği kazanmış olacak.
         */
        driver = Driver.getDriver();
        wait = new WebDriverWait(driver, 20);
    }

    public void waitUntilClickable(WebElement element){
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public void waitUntilVisible(WebElement element){
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void scrollToElement(WebElement element){
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView();", element);
    }

    public void waiting(int ms)
    {
        try {
            Thread.sleep(ms);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public List<WebElement> waitVisibleListAllElement(List<WebElement> elementList){
        wait.until(ExpectedConditions.visibilityOfAllElements(elementList));
        return elementList;
    }

    // return ByType of WebElement
    public By toByVal(WebElement we) {
        // By format = "[foundFrom] -> locator: term"
        // see RemoteWebElement toString() implementation
        String[] data = we.toString().split(" -> ")[1].replace("]", "").split(": ");
        String locator = data[0];
        String term = data[1];

        switch (locator) {
            case "xpath": return By.xpath(term);
            case "css selector": return By.cssSelector(term);
            case "id": return By.id(term);
            case "tag name":  return By.tagName(term);
            case "name":  return By.name(term);
            case "link text": return By.linkText(term);
            case "class name": return By.className(term);
        }
        return (By) we;
    }

    public void clickFunction(WebElement element){
       try {
           scrollToElement(element);
           waitUntilVisible(element);
           waitUntilClickable(element);
           element.click();
       }catch (StaleElementReferenceException e){
           System.out.println(e.getMessage());
           clickFunction(element);
           //element.click();
       }
    }


    public void sendKeysFunction(WebElement element, String value){
        waitUntilVisible(element);// eleman gorunur olana kadar bekle
        scrollToElement(element); // elemana kadar scroll yap
        element.clear();          // elemani clear yap
        element.sendKeys(value);  // value yi gonder
    }

    public void verifyElementContainsText(WebElement element, String expectedText){
        waitUntilVisible(element);
        //wait.until(ExpectedConditions.textToBePresentInElement(element,expectedText));
        scrollToElement(element);
        String actualText = element.getText();
        System.out.println(actualText);
        Assert.assertTrue(actualText.toLowerCase().contains(expectedText.toLowerCase()));
    }

    public void selectByVisibleText(WebElement myElement, String value){
        Select select = new Select(myElement);
        select.selectByVisibleText(value);
    }

    public void selectItemFromList(String item, List<WebElement> elementList){
        for (WebElement el : elementList) {
            if (el.getText().contains(item)) {
                System.out.println(el.getText());
                clickFunction(el);
                break;
            }
        }
    }

    public void navigateToBackPage() {
        driver.navigate().back();
    }

    public static String date(){
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd_HHmmss");
        return formatter.format(now);
    }

    public static void screenShot(Scenario scenario){
        // Alinan resmin dosya adini duzenliyoruz: SenaryoAditarihsaat

        TakesScreenshot ts = (TakesScreenshot) Driver.getDriver();
        File ekranDosyasi = ts.getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(ekranDosyasi, new File("target/failedScreenShots/" +
                    date() + "_" + scenario.getName() + "_" + Driver.threadBrowserName.get() +  ".png")); // chrome_Create country_20201021_014228.png
        } catch (
                IOException e) {
            e.printStackTrace();
        }
    }

    public static void exceleYaz(Scenario scenario){
        ExcelUtility.exceleYaz(scenario,date(), Driver.threadBrowserName.get());
    }

}
