package application.pages;



import jline.internal.Log;
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
	
	
	
	
	
	
	
	

	public void User_will_go_to() {
		btn_findFriends.waitUntilVisible();
		btn_findFriends.click();
		
	}

	public void verify_Page() {
		
		
	}

	public void sending_Request() {
		btn_frnd_req.waitUntilVisible();
		btn_frnd_req.click();
		Log.info("I sent friend request");
		btn_sent_req.waitUntilVisible();
		
		
		
	}

	public void cancelling_Friend_Request() {
		
		
	}
	
	
	
	
	
	

}
