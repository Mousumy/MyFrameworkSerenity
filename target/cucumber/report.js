$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/consult_dictionary/DefinitionApple.feature");
formatter.feature({
  "name": "Lookup a definition",
  "description": "  In order to talk better\n  As an English student\n  I want to look up word definitions",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Looking up the definition of \u0027apple\u0027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the Wikionary home page",
  "keyword": "Given "
});
formatter.match({
  "location": "DefinitionSteps.givenTheUserIsOnTheWikionaryHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user looks up the definition of the word \u0027apple\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "DefinitionSteps.whenTheUserLooksUpTheDefinitionOf(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they should see the definition \u0027A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinitionSteps.thenTheyShouldSeeADefinitionContainingTheWords(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Looking up the definition of \u0027pear\u0027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the Wikionary home page",
  "keyword": "Given "
});
formatter.match({
  "location": "DefinitionSteps.givenTheUserIsOnTheWikionaryHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user looks up the definition of the word \u0027pear\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "DefinitionSteps.whenTheUserLooksUpTheDefinitionOf(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they should see the definition \u0027An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinitionSteps.thenTheyShouldSeeADefinitionContainingTheWords(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Looking up the definition of \u0027pear\u0027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the Wikionary home page",
  "keyword": "Given "
});
formatter.match({
  "location": "DefinitionSteps.givenTheUserIsOnTheWikionaryHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user looks up the definition of the word \u0027pear\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "DefinitionSteps.whenTheUserLooksUpTheDefinitionOf(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they should see the definition \u0027An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinitionSteps.thenTheyShouldSeeADefinitionContainingTheWords(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Looking up the definition of \u0027pear\u0027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the Wikionary home page",
  "keyword": "Given "
});
formatter.match({
  "location": "DefinitionSteps.givenTheUserIsOnTheWikionaryHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user looks up the definition of the word \u0027pear\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "DefinitionSteps.whenTheUserLooksUpTheDefinitionOf(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they should see the definition \u0027An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinitionSteps.thenTheyShouldSeeADefinitionContainingTheWords(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/consult_dictionary/ProfilePage.feature");
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
      "name": "@regression"
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
});