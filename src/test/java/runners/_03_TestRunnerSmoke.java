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
        dryRun = false,

        plugin = { // basit rapor olusturan plugin
                "html:target/cucumber-report",
                "json:target/cucumber.json"}
)

public class _03_TestRunnerSmoke extends AbstractTestNGCucumberTests {

}
