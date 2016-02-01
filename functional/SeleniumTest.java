
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class SeleniumTest {
	WebDriver driver = null;
	
	@BeforeClass
	void setup(){
		driver = new FirefoxDriver();
	}
	
	@Test
	public void sampleTestMethod(){
		driver.get("http://localhost:8080/examples/jsp/jsp2/tagfiles/products.jsp");
	}
	
	@AfterClass
	void tearDown(){
		driver.close();
		driver.quit();
	}
}
