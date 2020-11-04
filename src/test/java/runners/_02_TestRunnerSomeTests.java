package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = {"src/test/java/featureFiles/_01_Login.feature", "src/test/java/featureFiles/_09_EntranceExam.feature"},
        glue = {"stepDefinitions"},
        dryRun = false

)

public class _02_TestRunnerSomeTests extends AbstractTestNGCucumberTests {
}
