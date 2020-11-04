package stepDefinitions;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import pages._Parent;
import utilities.Driver;
import utilities.ExcelUtility;

// Bu class i baska bir projeye kopyalayinca Projeyi RELOAD yapmak gerkeli !!!
public class _04_Hooks { // yani bütün senaryolara kanca atar gibi, öncesinde ve sonrasınd açalışıyor.
    @Before  // her senaryodan önce
    public void before(Scenario scenario) {
        System.out.println(scenario.getName() + " has been started");
//        System.out.println("Seneryanun ID: "+ scenario.getId());
//        System.out.println("Senaryo sourceTag: "+scenario.getSourceTagNames());
    }

    @After  // her senaryodan sonra
    public void after(Scenario scenario) {
        System.out.println(scenario.getName() + " : " + scenario.getStatus());

        if (scenario.getStatus() == "failed") {
            _Parent.screenShot(scenario);
        }

        _Parent.exceleYaz(scenario);

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        Driver.quitDriver();
    }

}
