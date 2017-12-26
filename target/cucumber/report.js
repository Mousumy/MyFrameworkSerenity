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
  "name": "EditPost functionality verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User will randomly select post",
  "keyword": "When "
});
formatter.match({
  "location": "ProfilePageStepDef.user_will_randomly_select_post()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Hide From TimeLine\" functionality should work",
  "keyword": "Then "
});
formatter.match({
  "location": "ProfilePageStepDef.functionality_should_work(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"ChangeDate\" functionality should work",
  "keyword": "And "
});
formatter.match({
  "location": "ProfilePageStepDef.functionality_should_work(String)"
});
formatter.result({
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: The following error occurred: Timed out after 30 seconds. List elements not visible\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027THINKPAD-PC\u0027, ip: \u0027192.168.1.186\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: unknown\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElements(SmartAjaxElementLocator.java:202)\r\n\tat net.thucydides.core.annotations.locators.SmartListHandler.invoke(SmartListHandler.java:42)\r\n\tat com.sun.proxy.$Proxy25.get(Unknown Source)\r\n\tat application.pages.ProfilePage.verifyEditPostFunctionality(ProfilePage.java:280)\r\n\tat application.steps.serenity.steps.verifyEditPostFunctionality(steps.java:86)\r\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5.CGLIB$verifyEditPostFunctionality$3(\u003cgenerated\u003e)\r\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5$$FastClassByCGLIB$$1ac4420.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:426)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:411)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:386)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:134)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:63)\r\n\tat application.steps.serenity.steps$$EnhancerByCGLIB$$337b79e5.verifyEditPostFunctionality(\u003cgenerated\u003e)\r\n\tat application.steps.ProfilePageStepDef.functionality_should_work(ProfilePageStepDef.java:79)\r\n\tat ✽.\"ChangeDate\" functionality should work(src/test/resources/features/consult_dictionary/ProfilePage.feature:38)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "\"Hide from timeline\" functionality should work",
  "keyword": "And "
});
formatter.match({
  "location": "ProfilePageStepDef.functionality_should_work(String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "MakePost functionality verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User will make new post",
  "keyword": "When "
});
formatter.match({
  "location": "ProfilePageStepDef.user_will_make_new_post()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It wil be visible in timeline",
  "keyword": "Then "
});
formatter.match({
  "location": "ProfilePageStepDef.it_wil_be_visible_in_timeline()"
});
formatter.result({
  "status": "passed"
});
});