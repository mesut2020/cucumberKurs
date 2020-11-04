package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Aşağıdaki seçenekde tags eklendi içinde grup adına
 * sahip senaryolar çalıştıralacak sadece
 */

@CucumberOptions(
        tags={"@SmokeTest"},
        features = {"src/test/java/featureFiles"},
        glue = {"stepDefinitions"},
        dryRun = false
)

public class _03_TestRunnerSmoke extends AbstractTestNGCucumberTests {

}
