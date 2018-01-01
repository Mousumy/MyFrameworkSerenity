package application.pages;



import jline.internal.Log;

import org.junit.Assert;

import application.utils.MyHelperMethods;
import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;

public class TopMenuBarPage extends PageObject {
	
	MyHelperMethods help;
	
	@FindBy (css="#findFriendsNav")
	private WebElementFacade btn_findFriends;
//	@FindBy (css="[aria-label='Add James Bulger as a friend']")
//	private WebElementFacade btn_frnd_req;
	
	@FindBy (css="[aria-label='Add Robert Brucato as a friend']")
	private WebElementFacade btn_frnd_req;
	
	@FindBy (css="[id*=u_] ._34f a")
	private WebElementFacade btn_sent_req;
	
	@FindBy (css="[id*=u_] > h2")
	private WebElementFacade btn_frn_page;
	
	
	
	
	
	
	
	

	public void User_will_go_to() {
		btn_findFriends.waitUntilVisible();
		btn_findFriends.click();
		
		
		
	}

	public void verify_Find_Friends_Page(String pageTitle) {
		String title = btn_frn_page.waitUntilVisible().getText().trim();
		Log.info("The title is: " + title );
		
		
		
		boolean value = title.equalsIgnoreCase("People You May Know");
		
		boolean test1 = "Mousumy".equalsIgnoreCase("mousumy");
		
		boolean test2 = title.contains("People You May Know");
		
		boolean test3 = title.contains("People You");
		
		boolean test4 = title.equalsIgnoreCase("People You");
		
		
		
		Log.info("---------------" + value);  	//true
		Log.info(test1);							//true
		Log.info(test2);							//true
		Log.info(test3);							//true
		Log.info(test4);							//true
		
		Assert.assertTrue("Page does not have the title!", value);
		
//		Assert.assertFalse("Page does not have the title!", value);
		Assert.assertEquals("People You May Know", title);
	
		
		
	}

	public void sending_Request() {
		btn_frnd_req.waitUntilVisible();
		btn_frnd_req.click();
		Log.info("I sent friend request");
		btn_sent_req.waitUntilVisible();
		Log.info("Friend request set to");
		
		
		
	}

	public void cancelling_Friend_Request() {
		
		
	}
	
	
	
	
	
	

}
