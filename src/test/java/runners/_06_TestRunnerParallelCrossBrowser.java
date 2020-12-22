package runners;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Parameters;
import utilities.Driver;

@CucumberOptions(
        //tags={"@RegressionTest"},
        features = {"src/test/java/featureFiles/_01_Login.feature"},
        glue = {"stepDefinitions"},
        dryRun = false,

        plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport/ExtentReportParallelTestLogIn1.html"
                // to generate an extend report we need this plugin
        }
)

public class _06_TestRunnerParallelCrossBrowser extends AbstractTestNGCucumberTests {

    @BeforeClass
    @Parameters("browser")
    public static void beforeClass(String browser){
        Driver.threadBrowserName.set(browser);

    }

    @AfterClass
    public static void afterClass (){
    Reporter.loadXMLConfig("src/test/java/xmlFiles/extendReportSet.xml"); // ayarlar alındı, cucumber extend reporttan haberi oldu

    Reporter.setSystemInfo("User Name","Mesut Dogan");
    Reporter.setSystemInfo("Application Name","Basqar");
    Reporter.setSystemInfo("System Info",System.getProperty("os.name"));
    Reporter.setSystemInfo("Department","QA");

    Reporter.setTestRunnerOutput("Test execution Cucumber Report");
}

}
