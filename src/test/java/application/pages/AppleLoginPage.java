package application.pages;

import java.util.List;
import java.util.stream.Collectors;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.pages.PageObject;

import org.openqa.selenium.By;

@DefaultUrl("http://en.wiktionary.org/wiki/Wiktionary")
public class AppleLoginPage extends PageObject {

    @FindBy(name="search")
    private WebElementFacade searchTerms;

    @FindBy(name="go")
    private WebElementFacade lookupButton;

    public void enter_keywords(String keyword) {
        searchTerms.type(keyword);
    }

    public void lookup_terms() {
        lookupButton.click();
    }

    public List<String> getDefinitions() {
        WebElementFacade definitionList = find(By.tagName("ol"));
        return definitionList.findElements(By.tagName("li")).stream()
                             .map( element -> element.getText() )
                             .collect(Collectors.toList());
        
    }
    
    public void testMethod(){
    	lookupButton.waitUntilVisible();
    }
    
    
    public void windowTest(){
//    	GetAllWindowHandles;
    }
    
    
    
}