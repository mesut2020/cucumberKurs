$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("_01_Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Senaryo ;"
    },
    {
      "line": 2,
      "value": "#1- siteyi açınız."
    },
    {
      "line": 3,
      "value": "#2- username ve password u gönderin ve Login butonuna tıklatın."
    },
    {
      "line": 4,
      "value": "#3- Login olduğunuzu doğrulayın."
    }
  ],
  "line": 6,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 412839,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with valid username and password",
  "description": "",
  "id": "login-functionality;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    },
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#    siteyi ac - basqaara git"
    }
  ],
  "line": 12,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#    username ve password girip, logine tiklayin"
    }
  ],
  "line": 14,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#    Login oldugunu dogrula"
    }
  ],
  "line": 16,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 8204553239,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 2553760924,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 37531,
  "status": "passed"
});
formatter.after({
  "duration": 1542850122,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.ExcelUtility.exceleYaz(ExcelUtility.java:91)\r\n\tat pages._Parent.exceleYaz(_Parent.java:126)\r\n\tat stepDefinitions._04_Hooks.after(_04_Hooks.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1510)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("_02_Country.feature");
formatter.feature({
  "line": 1,
  "name": "Country functionality",
  "description": "",
  "id": "country-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 63210,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create country",
  "description": "",
  "id": "country-functionality;create-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Navigate to country page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Create a country",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 5091906261,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 11718119050,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 32790,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.navigate_to_country_page()"
});
formatter.result({
  "duration": 1292817431,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.create_a_country()"
});
formatter.result({
  "duration": 385262951,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MED\u0027, ip: \u0027192.168.0.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\medog\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c8ba4994388e02a9bc4578d80c07f4ca\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor2.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages._Parent.waitUntilVisible(_Parent.java:40)\r\n\tat pages._Parent.clickFunction(_Parent.java:63)\r\n\tat pages.DialogContent.findElementAndClickFunction(DialogContent.java:124)\r\n\tat stepDefinitions._02_CountrySteps.create_a_country(_02_CountrySteps.java:22)\r\n\tat ✽.When Create a country(_02_Country.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1280223273,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.ExcelUtility.exceleYaz(ExcelUtility.java:91)\r\n\tat pages._Parent.exceleYaz(_Parent.java:126)\r\n\tat stepDefinitions._04_Hooks.after(_04_Hooks.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1510)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("_06_Nationalities.feature");
formatter.feature({
  "line": 1,
  "name": "Nationalities functionality",
  "description": "",
  "id": "nationalities-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 105876,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Navigate to Nationalities page",
  "keyword": "And "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 3093027446,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 1933257956,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 17383,
  "status": "passed"
});
formatter.match({
  "location": "_06_NationalitiesStep.navigateToNationalitiesPage()"
});
formatter.result({
  "duration": 4774576070,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Nationalities All functioanlity",
  "description": "",
  "id": "nationalities-functionality;nationalities-all-functioanlity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@SmokeTest"
    },
    {
      "line": 21,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Create a Nationality name as \"Japonishi\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User edit the \"Japonishi\" to \"Japonishi2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User delete the \"Japonishi2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Japonishi",
      "offset": 30
    }
  ],
  "location": "_06_NationalitiesStep.createANationalityNameAs(String)"
});
formatter.result({
  "duration": 406139964,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MED\u0027, ip: \u0027192.168.0.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\medog\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c8ba4994388e02a9bc4578d80c07f4ca\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor2.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages._Parent.waitUntilVisible(_Parent.java:40)\r\n\tat pages._Parent.clickFunction(_Parent.java:63)\r\n\tat pages.DialogContent.findElementAndClickFunction(DialogContent.java:124)\r\n\tat stepDefinitions._06_NationalitiesStep.createANationalityNameAs(_06_NationalitiesStep.java:21)\r\n\tat ✽.Then Create a Nationality name as \"Japonishi\"(_06_Nationalities.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Japonishi",
      "offset": 15
    },
    {
      "val": "Japonishi2",
      "offset": 30
    }
  ],
  "location": "_03_CountryCreateEditDeleteSteps.user_edit_the_to(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Japonishi2",
      "offset": 17
    }
  ],
  "location": "_03_CountryCreateEditDeleteSteps.user_delete_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 983943525,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.ExcelUtility.exceleYaz(ExcelUtility.java:91)\r\n\tat pages._Parent.exceleYaz(_Parent.java:126)\r\n\tat stepDefinitions._04_Hooks.after(_04_Hooks.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1510)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("_09_EntranceExam.feature");
formatter.feature({
  "line": 1,
  "name": "Entrance Exam functionality",
  "description": "",
  "id": "entrance-exam-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 353185,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 3395127235,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 11448820011,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 12642,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create an entrance exam",
  "description": "",
  "id": "entrance-exam-functionality;create-an-entrance-exam",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "entranceExamsParent"
      ],
      "line": 11
    },
    {
      "cells": [
        "setupEntranceExam"
      ],
      "line": 12
    },
    {
      "cells": [
        "entranceExamsChild"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User sends the keys in the form content class",
  "rows": [
    {
      "cells": [
        "nameInput",
        "ICT17"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on the element in the form content class",
  "rows": [
    {
      "cells": [
        "academicPeriod"
      ],
      "line": 22
    },
    {
      "cells": [
        "option1"
      ],
      "line": 23
    },
    {
      "cells": [
        "gradeLevel"
      ],
      "line": 24
    },
    {
      "cells": [
        "option1"
      ],
      "line": 25
    },
    {
      "cells": [
        "documentType"
      ],
      "line": 26
    },
    {
      "cells": [
        "option1"
      ],
      "line": 27
    },
    {
      "cells": [
        "formAddButton"
      ],
      "line": 28
    },
    {
      "cells": [
        "formSaveButton"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Navigate to back page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User delete the \"ICT17\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "duration": 1263529169,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 913621041,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 1042327654,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.clickOnTheElementInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 2614750086,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 524671378,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.navigateToBackPage()"
});
formatter.result({
  "duration": 505772042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ICT17",
      "offset": 17
    }
  ],
  "location": "_03_CountryCreateEditDeleteSteps.user_delete_the(String)"
});
formatter.result({
  "duration": 1536467908,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 212353723,
  "status": "passed"
});
formatter.after({
  "duration": 82555557,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.ExcelUtility.exceleYaz(ExcelUtility.java:91)\r\n\tat pages._Parent.exceleYaz(_Parent.java:126)\r\n\tat stepDefinitions._04_Hooks.after(_04_Hooks.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1510)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("odevStudent.feature");
formatter.feature({
  "line": 1,
  "name": "HW: Student functionality",
  "description": "",
  "id": "hw:-student-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User add and delete a student",
  "description": "",
  "id": "hw:-student-functionality;user-add-and-delete-a-student",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "studentParent"
      ],
      "line": 12
    },
    {
      "cells": [
        "studentsChild"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User sends the keys in the form content class",
  "rows": [
    {
      "cells": [
        "firstName",
        "\u003cfirstname\u003e"
      ],
      "line": 19
    },
    {
      "cells": [
        "lastName",
        "\u003clastname\u003e"
      ],
      "line": 20
    },
    {
      "comments": [
        {
          "line": 21,
          "value": "#      | birthDate | \u003cbirthdate\u003e |"
        }
      ],
      "cells": [
        "studentID",
        "\u003cstudentid\u003e"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "gender"
      ],
      "line": 26
    },
    {
      "cells": [
        "\u003cgenderOption\u003e"
      ],
      "line": 27
    },
    {
      "cells": [
        "gradeLevel"
      ],
      "line": 28
    },
    {
      "cells": [
        "\u003cgradeLevelOption\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "schoolDepartment"
      ],
      "line": 30
    },
    {
      "cells": [
        "\u003cschoolDepartmentOption\u003e"
      ],
      "line": 31
    },
    {
      "cells": [
        "section"
      ],
      "line": 32
    },
    {
      "cells": [
        "\u003csectionOption\u003e"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User sends the keys in the form content class",
  "rows": [
    {
      "cells": [
        "mobilePhone",
        "\u003cmobilephone\u003e"
      ],
      "line": 36
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "citizinship"
      ],
      "line": 40
    },
    {
      "cells": [
        "\u003ccitizinshipOption\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        "nationality"
      ],
      "line": 42
    },
    {
      "cells": [
        "\u003cnationalityOption\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "studentDocumentType"
      ],
      "line": 44
    },
    {
      "cells": [
        "\u003cstudentDocumentType\u003e"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User sends the keys in the form content class",
  "rows": [
    {
      "cells": [
        "previousSchool",
        "\u003cpreviousSchool\u003e"
      ],
      "line": 49
    },
    {
      "cells": [
        "studentDocumentNumber",
        "\u003cstudentDocumentNumber\u003e"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "representatives"
      ],
      "line": 53
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "representative"
      ],
      "line": 59
    },
    {
      "cells": [
        "\u003crepresentativeOptions\u003e"
      ],
      "line": 60
    },
    {
      "cells": [
        "country"
      ],
      "line": 61
    },
    {
      "cells": [
        "\u003ccountryOptions\u003e"
      ],
      "line": 62
    },
    {
      "cells": [
        "city"
      ],
      "line": 63
    },
    {
      "cells": [
        "\u003ccityOptions\u003e"
      ],
      "line": 64
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User sends the keys in the form content class",
  "rows": [
    {
      "cells": [
        "firstNameRep",
        "\u003crepresentativeFirstName\u003e"
      ],
      "line": 67
    },
    {
      "cells": [
        "lastNameRep",
        "\u003crepresentativeLastName\u003e"
      ],
      "line": 68
    },
    {
      "cells": [
        "mobilePhoneRep",
        "\u003crepresentativeMobilePhone\u003e"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "representativeAddButton"
      ],
      "line": 72
    },
    {
      "cells": [
        "formSaveButton"
      ],
      "line": 73
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Navigate to back page",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "User delete the student\"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "hw:-student-functionality;user-add-and-delete-a-student;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "birthdate",
        "studentid",
        "mobilephone",
        "email",
        "previousSchool",
        "representativeFirstName",
        "representativeLastName",
        "representativeMobilePhone",
        "genderOption",
        "gradeLevelOption",
        "schoolDepartmentOption",
        "sectionOption",
        "citizinshipOption",
        "nationalityOption",
        "representativeOptions",
        "countryOptions",
        "cityOptions",
        "studentDocumentType",
        "studentDocumentNumber"
      ],
      "line": 85,
      "id": "hw:-student-functionality;user-add-and-delete-a-student;;1"
    },
    {
      "cells": [
        "Erol",
        "Tas",
        "08/08/2006",
        "20202006",
        "1234567898",
        "abcd@yahoo.com",
        "Selcuklu Orta Okulu",
        "Ahmet",
        "Baba",
        "1234567899",
        "option1",
        "option4",
        "option2",
        "option2",
        "option1",
        "option2",
        "option1",
        "option4",
        "option2",
        "option2",
        "12345"
      ],
      "line": 86,
      "id": "hw:-student-functionality;user-add-and-delete-a-student;;2"
    },
    {
      "cells": [
        "Jale",
        "Polat",
        "08/08/2008",
        "20202008",
        "1234567899",
        "efgh@hotmail.com",
        "Karatay Orta Okulu",
        "Ayse",
        "Ana",
        "1122334455",
        "option2",
        "option2",
        "option1",
        "option1",
        "option2",
        "option4",
        "option2",
        "option1",
        "option2",
        "option3",
        "67890"
      ],
      "line": 87,
      "id": "hw:-student-functionality;user-add-and-delete-a-student;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 505283,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 2663186572,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 1198361049,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 13037,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "User add and delete a student",
  "description": "",
  "id": "hw:-student-functionality;user-add-and-delete-a-student;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "studentParent"
      ],
      "line": 12
    },
    {
      "cells": [
        "studentsChild"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User sends the keys in the form content class",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "rows": [
    {
      "cells": [
        "firstName",
        "Erol"
      ],
      "line": 19
    },
    {
      "cells": [
        "lastName",
        "Tas"
      ],
      "line": 20
    },
    {
      "comments": [
        {
          "line": 21,
          "value": "#      | birthDate | \u003cbirthdate\u003e |"
        }
      ],
      "cells": [
        "studentID",
        "20202006"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on the element in the form class",
  "matchedColumns": [
    10,
    11,
    12,
    13
  ],
  "rows": [
    {
      "cells": [
        "gender"
      ],
      "line": 26
    },
    {
      "cells": [
        "option1"
      ],
      "line": 27
    },
    {
      "cells": [
        "gradeLevel"
      ],
      "line": 28
    },
    {
      "cells": [
        "option4"
      ],
      "line": 29
    },
    {
      "cells": [
        "schoolDepartment"
      ],
      "line": 30
    },
    {
      "cells": [
        "option2"
      ],
      "line": 31
    },
    {
      "cells": [
        "section"
      ],
      "line": 32
    },
    {
      "cells": [
        "option2"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User sends the keys in the form content class",
  "matchedColumns": [
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "mobilePhone",
        "1234567898"
      ],
      "line": 36
    },
    {
      "cells": [
        "email",
        "abcd@yahoo.com"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on the element in the form class",
  "matchedColumns": [
    19,
    14,
    15
  ],
  "rows": [
    {
      "cells": [
        "citizinship"
      ],
      "line": 40
    },
    {
      "cells": [
        "option1"
      ],
      "line": 41
    },
    {
      "cells": [
        "nationality"
      ],
      "line": 42
    },
    {
      "cells": [
        "option2"
      ],
      "line": 43
    },
    {
      "cells": [
        "studentDocumentType"
      ],
      "line": 44
    },
    {
      "cells": [
        "option2"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User sends the keys in the form content class",
  "matchedColumns": [
    20,
    6
  ],
  "rows": [
    {
      "cells": [
        "previousSchool",
        "Selcuklu Orta Okulu"
      ],
      "line": 49
    },
    {
      "cells": [
        "studentDocumentNumber",
        "12345"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "representatives"
      ],
      "line": 53
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Click on the element in the form class",
  "matchedColumns": [
    16,
    17,
    18
  ],
  "rows": [
    {
      "cells": [
        "representative"
      ],
      "line": 59
    },
    {
      "cells": [
        "option1"
      ],
      "line": 60
    },
    {
      "cells": [
        "country"
      ],
      "line": 61
    },
    {
      "cells": [
        "option4"
      ],
      "line": 62
    },
    {
      "cells": [
        "city"
      ],
      "line": 63
    },
    {
      "cells": [
        "option2"
      ],
      "line": 64
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User sends the keys in the form content class",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "firstNameRep",
        "Ahmet"
      ],
      "line": 67
    },
    {
      "cells": [
        "lastNameRep",
        "Baba"
      ],
      "line": 68
    },
    {
      "cells": [
        "mobilePhoneRep",
        "1234567899"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "representativeAddButton"
      ],
      "line": 72
    },
    {
      "cells": [
        "formSaveButton"
      ],
      "line": 73
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Navigate to back page",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "User delete the student\"Erol\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "duration": 3644133162,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 578686524,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 2996581535,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "duration": 3214249623,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 1413830226,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "duration": 2939640170,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 1165659063,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "duration": 390128920,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 1375252889,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "duration": 2869028106,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 1423908238,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "duration": 953313241,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 634665915,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.navigateToBackPage()"
});
formatter.result({
  "duration": 341370855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Erol",
      "offset": 24
    }
  ],
  "location": "_03_CountryCreateEditDeleteSteps.userDeleteTheStudent(String)"
});
formatter.result({
  "duration": 1996709535,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 233805156,
  "status": "passed"
});
formatter.after({
  "duration": 34722329,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.ExcelUtility.exceleYaz(ExcelUtility.java:91)\r\n\tat pages._Parent.exceleYaz(_Parent.java:126)\r\n\tat stepDefinitions._04_Hooks.after(_04_Hooks.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1510)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 195160,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 2621641140,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 11069555671,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 13827,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "User add and delete a student",
  "description": "",
  "id": "hw:-student-functionality;user-add-and-delete-a-student;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "studentParent"
      ],
      "line": 12
    },
    {
      "cells": [
        "studentsChild"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User sends the keys in the form content class",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "rows": [
    {
      "cells": [
        "firstName",
        "Jale"
      ],
      "line": 19
    },
    {
      "cells": [
        "lastName",
        "Polat"
      ],
      "line": 20
    },
    {
      "comments": [
        {
          "line": 21,
          "value": "#      | birthDate | \u003cbirthdate\u003e |"
        }
      ],
      "cells": [
        "studentID",
        "20202008"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on the element in the form class",
  "matchedColumns": [
    10,
    11,
    12,
    13
  ],
  "rows": [
    {
      "cells": [
        "gender"
      ],
      "line": 26
    },
    {
      "cells": [
        "option2"
      ],
      "line": 27
    },
    {
      "cells": [
        "gradeLevel"
      ],
      "line": 28
    },
    {
      "cells": [
        "option2"
      ],
      "line": 29
    },
    {
      "cells": [
        "schoolDepartment"
      ],
      "line": 30
    },
    {
      "cells": [
        "option1"
      ],
      "line": 31
    },
    {
      "cells": [
        "section"
      ],
      "line": 32
    },
    {
      "cells": [
        "option1"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User sends the keys in the form content class",
  "matchedColumns": [
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "mobilePhone",
        "1234567899"
      ],
      "line": 36
    },
    {
      "cells": [
        "email",
        "efgh@hotmail.com"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on the element in the form class",
  "matchedColumns": [
    19,
    14,
    15
  ],
  "rows": [
    {
      "cells": [
        "citizinship"
      ],
      "line": 40
    },
    {
      "cells": [
        "option2"
      ],
      "line": 41
    },
    {
      "cells": [
        "nationality"
      ],
      "line": 42
    },
    {
      "cells": [
        "option4"
      ],
      "line": 43
    },
    {
      "cells": [
        "studentDocumentType"
      ],
      "line": 44
    },
    {
      "cells": [
        "option3"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User sends the keys in the form content class",
  "matchedColumns": [
    20,
    6
  ],
  "rows": [
    {
      "cells": [
        "previousSchool",
        "Karatay Orta Okulu"
      ],
      "line": 49
    },
    {
      "cells": [
        "studentDocumentNumber",
        "67890"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "representatives"
      ],
      "line": 53
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Click on the element in the form class",
  "matchedColumns": [
    16,
    17,
    18
  ],
  "rows": [
    {
      "cells": [
        "representative"
      ],
      "line": 59
    },
    {
      "cells": [
        "option2"
      ],
      "line": 60
    },
    {
      "cells": [
        "country"
      ],
      "line": 61
    },
    {
      "cells": [
        "option1"
      ],
      "line": 62
    },
    {
      "cells": [
        "city"
      ],
      "line": 63
    },
    {
      "cells": [
        "option2"
      ],
      "line": 64
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User sends the keys in the form content class",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "firstNameRep",
        "Ayse"
      ],
      "line": 67
    },
    {
      "cells": [
        "lastNameRep",
        "Ana"
      ],
      "line": 68
    },
    {
      "cells": [
        "mobilePhoneRep",
        "1122334455"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Click on the element in the form class",
  "rows": [
    {
      "cells": [
        "representativeAddButton"
      ],
      "line": 72
    },
    {
      "cells": [
        "formSaveButton"
      ],
      "line": 73
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Navigate to back page",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "User delete the student\"Jale\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "duration": 1074744800,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 315288120,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MED\u0027, ip: \u0027192.168.0.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\medog\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c8ba4994388e02a9bc4578d80c07f4ca\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor2.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages._Parent.waitUntilVisible(_Parent.java:40)\r\n\tat pages._Parent.clickFunction(_Parent.java:63)\r\n\tat pages.DialogContent.findElementAndClickFunction(DialogContent.java:124)\r\n\tat stepDefinitions._08_DataTableSteps.clickOnTheElementInTheContentClass(_08_DataTableSteps.java:41)\r\n\tat ✽.And Click on the element in the content class(odevStudent.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendsTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheFormClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_09_EntranceExamSteps.navigateToBackPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jale",
      "offset": 24
    }
  ],
  "location": "_03_CountryCreateEditDeleteSteps.userDeleteTheStudent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 829287708,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.ExcelUtility.exceleYaz(ExcelUtility.java:91)\r\n\tat pages._Parent.exceleYaz(_Parent.java:126)\r\n\tat stepDefinitions._04_Hooks.after(_04_Hooks.java:28)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1510)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
});