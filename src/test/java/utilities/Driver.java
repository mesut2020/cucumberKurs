package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Driver {
//    private static WebDriver driverChrome;
//    private static WebDriver driverFirefox;

    // Her farkli browser icin farkli bir degisken havuzu olusturduk...
    private static ThreadLocal<WebDriver> threadDriver = new ThreadLocal<>();
    public static ThreadLocal<String> threadBrowserName = new ThreadLocal<>();

//    private static String browserType1="Chrome";
//    private static String browserType2="Firefox";

    public static WebDriver getDriver() {
        if (threadBrowserName.get() == null)
            threadBrowserName.set("chrome");

        // todo istenen daha onceden olusturulmus olarak var mi?  varsa return yap, yoksa set et return yap
        // todo Bu kontrol islemini herhangi bir list yapamazdi. Ancak ThreadLocal otomatik yapabiliyor

        if (threadDriver.get() == null) {

            switch (threadBrowserName.get()) {

                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    threadDriver.set(new FirefoxDriver());
                    break;
                case "edge":
                    WebDriverManager.edgedriver().setup();
                    threadDriver.set(new EdgeDriver());
                    break;
                default:
                    WebDriverManager.chromedriver().setup();
                    threadDriver.set(new ChromeDriver());
                    break;
            }
        }
        return threadDriver.get();
    }

    public static void quitDriver() {
        if (threadDriver.get() != null) {

            threadDriver.get().quit(); //
            WebDriver driver = threadDriver.get(); // thread local daki ilgili driver in referansi alindi
            driver = null; // null degeri alarak bosaltiliyor
            threadDriver.set(driver); // cikarken secili browser temizliyoruz null esitleyerek. yoksa getDriver dusmez
        }

    }
}
