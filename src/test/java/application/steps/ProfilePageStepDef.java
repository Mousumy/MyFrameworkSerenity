package application.steps;

import application.steps.serenity.steps;
import net.thucydides.core.annotations.Steps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ProfilePageStepDef {
	   @Steps
	    steps step;

	
    @Given("^User can log in to facebook using userid as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void user_can_log_in_to_facebook_using_userid_as_and_password_as(String username, String password){
    	step.go_to_facebook_url();
    	step.login_to_facebook_using_userid_and_password(username,password);
    	step.landing_page_has_been_loaded_successfully(); 
    }
    
    @Then("^User profile has been loaded successfully$")
    public void user_profile_has_been_loaded_successfully(){
    	
    	step.user_will_go_to_profile(); 
    }

    @When("^User will search for \"([^\"]*)\"$")
    public void user_will_search_for(String name){
    	step.user_search_for_friend(name);

}
    @Then("^Verify this header \"([^\"]*)\" is present$")
	public void verify_this_header_is_present(String name){
		step.profilpage_header_is_present(name);
		
	   
	}
	
	@When("^Navigate to \"([^\"]*)\"$")
	public void navigate_to(String title){
	    step.user_will_navigate(title);
	}
	
	@Given("^About tab has this feature option \"([^\"]*)\"$")
	public void about_tab_has_this_feature_option(String name){
//		step.user_will_go_to_About_tab();	
//		step.verify_link_is_present(name);
		step.WorkAndEducationFrmAbt();
		
	}

	@When("^Verify header \"([^\"]*)\" is present$")
	public void verify_header_is_present(String name){
		step.header_is_present(name);
	    
	}

	@Then("^Verify \"([^\"]*)\" funtionality should work$")
	public void verify_funtionality_should_work(String name){
		step.lifeEventFunctionality_Is_Loaded(name);
	}
	

	@Then("^verify more functionality is working$")
	public void verify_more_functionality_is_working(){
		step.moreFunctionIsWorked();
}
//	new steps added to check
	
	@When("^User will randomly select post$")
	public void user_will_randomly_select_post(){
		step.randomlySelectPost();
	   
	}

	@Then("^\"([^\"]*)\" functionality should work$")
	public void functionality_should_work( String func) {
		step.verifyEditPostFunctionality(func);
	
	}

	@When("^User will make new post$")
	public void user_will_make_new_post(){
		step.MakeAPost();
	 
	}

	@Then("^It wil be visible in timeline$")
	public void it_wil_be_visible_in_timeline(){
	}	
	
	@Given("^User will check the text is available$")
	public void user_will_check_the_text_is_available(){
		step.checking_The_Text_Is_Available();
	
	}
	
	
	
}