package runners;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

@CucumberOptions(
        tags={"@RegressionTest"},
        features = {"src/test/java/featureFiles"},
        glue = {"stepDefinitions"},
        dryRun = false,

        plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport/ExtentReportRegression2.html"
                // to generate a extend report we need this plugin
        }
)

public class _05_TestRunnerExtendReport extends AbstractTestNGCucumberTests {

    @BeforeClass
    public static void beforeClass(){

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
