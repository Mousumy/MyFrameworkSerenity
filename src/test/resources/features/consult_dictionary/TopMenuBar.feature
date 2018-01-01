Feature: As a Facebook User
		I will check all Top Menu Bar feature
		
Background: 
	Given User can log in to facebook using userid as "asmenterprise.llc@gmail.com" and password as "ctg310306"
#	And User profile has been loaded successfully 

@smoke
Scenario: Find friends feature Verification

	When User will go to "Find friends"
	And Verify "Find friends" page loaded
	And will send request to "James Bulger"
	And will send request to "Robert Brucato"
	Then Cancel the friend request

	
	
	