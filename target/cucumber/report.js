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
  "name": "Friends functionality verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Navigate to \"Friends\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProfilePageStepDef.navigate_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will search for \"Sunil C Patel\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProfilePageStepDef.user_will_search_for(String)"
});
formatter.result({
  "status": "passed"
});
});