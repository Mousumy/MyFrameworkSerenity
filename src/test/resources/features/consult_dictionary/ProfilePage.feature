Feature: Lookup a friend from facebook friend list
  In order to find a friend 
  As an facebook user
  I want to search friend from list

Background: 
	Given User can log in to facebook using userid as "asmenterprise.llc@gmail.com" and password as "ctg310306"
	And User profile has been loaded successfully 
	  
@regression
Scenario: Search for Friends
  	When User will search for "Sunil C Patel"