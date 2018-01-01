$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/consult_dictionary/ProfilePage.feature");
formatter.feature({
  "name": "Lookup a friend from facebook friend list",
  "description": "  In order to find a friend \n  As an facebook user\n  I want to search friend from list",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User can log in to facebook using userid as \"asmenterprise.llc@gmail.com\" and password as \"ctg310306\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ProfilePageStepDef.user_can_log_in_to_facebook_using_userid_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User profile has been loaded successfully",
  "keyword": "And "
});
formatter.match({
  "location": "ProfilePageStepDef.user_profile_has_been_loaded_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for Friends",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User will search for \"Sunil C Patel\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProfilePageStepDef.user_will_search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/consult_dictionary/TopMenuBar.feature");
formatter.feature({
  "name": "As a Facebook User",
  "description": "\t\tI will check all Top Menu Bar feature",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User can log in to facebook using userid as \"asmenterprise.llc@gmail.com\" and password as \"ctg310306\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ProfilePageStepDef.user_can_log_in_to_facebook_using_userid_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find friends feature Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User will go to \"Find friends\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuBarStepDef.user_will_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify \"Find friends\" page loaded",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuBarStepDef.verify_page_loaded(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will send request to \"Robert Brucato\"",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuBarStepDef.will_send_request_to(String)"
});
formatter.result({
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: The following error occurred: Expected condition failed: waiting for TopMenuBarPage.btn_frnd_req to be displayed (tried for 5 second(s) with 100 MILLISECONDS interval)\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027Mousumys-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c9:467b:1d4b:953%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.5\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.throwNoSuchElementExceptionWithCauseIfPresent(WebElementFacadeImpl.java:893)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.checkPresenceOfWebElement(WebElementFacadeImpl.java:866)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilVisible(WebElementFacadeImpl.java:873)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\n\tat com.sun.proxy.$Proxy24.waitUntilVisible(Unknown Source)\n\tat application.pages.TopMenuBarPage.sending_Request(TopMenuBarPage.java:46)\n\tat application.steps.serenity.steps.sending_Request(steps.java:121)\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5.CGLIB$sending_Request$22(\u003cgenerated\u003e)\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5$$FastClassByCGLIB$$1ac4420.invoke(\u003cgenerated\u003e)\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:426)\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:411)\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:386)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:134)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:63)\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5.sending_Request(\u003cgenerated\u003e)\n\tat application.steps.TopMenuBarStepDef.will_send_request_to(TopMenuBarStepDef.java:27)\n\tat ✽.will send request to \"Robert Brucato\"(src/test/resources/features/consult_dictionary/TopMenuBar.feature:14)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for TopMenuBarPage.btn_frnd_req to be displayed (tried for 5 second(s) with 100 MILLISECONDS interval)\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027Mousumys-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c9:467b:1d4b:953%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.5\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:263)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.checkPresenceOfWebElement(WebElementFacadeImpl.java:860)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilVisible(WebElementFacadeImpl.java:873)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\n\tat com.sun.proxy.$Proxy24.waitUntilVisible(Unknown Source)\n\tat application.pages.TopMenuBarPage.sending_Request(TopMenuBarPage.java:46)\n\tat application.steps.serenity.steps.sending_Request(steps.java:121)\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5.CGLIB$sending_Request$22(\u003cgenerated\u003e)\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5$$FastClassByCGLIB$$1ac4420.invoke(\u003cgenerated\u003e)\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:426)\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:411)\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:386)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:134)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:63)\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5.sending_Request(\u003cgenerated\u003e)\n\tat application.steps.TopMenuBarStepDef.will_send_request_to(TopMenuBarStepDef.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
formatter.step({
  "name": "Cancel the friend request",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuBarStepDef.cancel_the_friend_request()"
});
formatter.result({
  "status": "skipped"
});
});