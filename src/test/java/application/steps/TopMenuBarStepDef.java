package application.steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;
import application.steps.serenity.steps;


public class TopMenuBarStepDef {
	@Steps
	steps step;
	
	@When("^User will go to \"([^\"]*)\"$")
	public void user_will_go_to(String arg1){
	   step.User_will_go_to();
	}


	@When("^Verify \"([^\"]*)\" page loaded$")
	public void verify_page_loaded(String title){
		step.verify_Find_Friends_Page(title);
	    
	}

	@When("^will send request to \"([^\"]*)\"$")
	public void will_send_request_to(String arg1){
		step.sending_Request();
	   
	}

	@Then("^Cancel the friend request$")
	public void cancel_the_friend_request(){
		step.cancelling_Friend_Request();
	}



}
