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
      "name": "@Manual"
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
      "name": "@skip"
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
      "name": "@Pending"
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
});