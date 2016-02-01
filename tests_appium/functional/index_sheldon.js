define(function(require){
	var assert = require('intern/chai!assert');
	var registerSuite = require('intern!object');	

	registerSuite({
		name: 'Suite Name',
		setup: function () {
			console.log("Setup called..");
      		},	
		teardown: function () {
			console.log("Teardown called..");
      		}
        ,
		'Login_func': function () {
            this.async(120000);
			return this.remote
               		.setFindTimeout(50000)
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[1]").tap().type('spurohit@chenoainc.com').end()
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIASecureTextField[1]").tap().type("password#2").end()
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAButton[1]").tap().end()
			.setFindTimeout(5000)
			.findByName("I Agree").tap().end()
       			.then(function (f) {
				assert.isTrue(true,"Successful login");
            		});

		},
		'Interviewee': function () {
            console.log("Called Interviewee function...");
            this.async(180000);
			return this.remote
               		.setFindTimeout(50000)
                  
            //Logout
            .findByName("Welcome sona purohit").tap().end()
            .findByName("Logout").tap().end()

            //Login
            .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[1]").tap().type('spurohit@chenoainc.com').end()
            .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIASecureTextField[1]").tap().type("password#2").end()
            .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAButton[1]").tap().end()
            .findByName("I Agree").tap().end()
            .setFindTimeout(3000)
            .findByXpath("//UIAApplication[1]/UIAWindow[1]").tap().end()
            .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAButton[4]").click().end()
            .setFindTimeout(5000)
	  		.findByName("New Interview").click().end()
			.setFindTimeout(5000)

	  		.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[1]").tap().end()
	  		.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAPopover[1]/UIASearchBar[1]/UIASearchBar[1]").tap().end()
	  		.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAPopover[1]/UIASearchBar[1]/UIASearchBar[1]").tap().type("test").end()
	  		.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAPopover[1]/UIATableView[1]/UIATableCell[1]").tap().end()
	  		.findByName("Select").tap().end()

			.setFindTimeout(4000)
	  
	  		//Role
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[2]").tap().end()
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAPopover[1]/UIATableView[1]/UIATableCell[1]/UIAStaticText[1]").tap().end()

			//Interview Location
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[6]").tap().end()
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[6]").tap().type("Chenoa").end()
		
			//Interview Date
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[5]").tap().end()
			.findByName("Select").tap().end()
		
			//Plan Button
			.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATableView[1]/UIATableCell[1]/UIAButton[1]").tap().end()
		
			//Save and Exit
			.findByName("Welcome sona purohit").tap().end()
			.findByName("Save & Exit").tap().end()
			
			//Verify Entry
			.findByName("name-name test-test").getVisibleText()
			.then(function (text) {
                  assert.strictEqual(text, "name-name test-test", "Text should be displayed when the form is submitted");
				//assert.isTrue(true,"Successfully saved");
            		});
		}
	});
});