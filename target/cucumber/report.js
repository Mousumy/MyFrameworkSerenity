$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/consult_dictionary/TopMenuBar.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "Cancel the friend request",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuBarStepDef.cancel_the_friend_request()"
});
formatter.result({
  "status": "passed"
});
});