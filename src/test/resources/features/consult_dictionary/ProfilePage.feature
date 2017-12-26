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
  	
@regression 
Scenario: Timeline functionality verification
	When Navigate to "Timeline"	
	And Verify header "Life Event" is present
	Then Verify "Work & Education" funtionality should work
	
@regression       
Scenario: profilepage header verification
	Then Verify this header "Photos" is present
	
@regression
Scenario: More functionality verification
	And Navigate to "more"
	Then verify more functionality is working

@regression
Scenario: Friends functionality verification
	And Navigate to "Friends"
	And User will search for "Sunil C Patel"
	
@smoke
Scenario: EditPost functionality verification
	When User will randomly select post
	Then "Hide From TimeLine" functionality should work
	And "ChangeDate" functionality should work
	And "Hide from timeline" functionality should work	

@smoke
Scenario:	MakePost functionality verification
		When User will make new post
		Then It wil be visible in timeline
@regression		
Scenario: About Functionality verification
	When Navigate to "About"
	Then About tab has this feature option "Work and Education"