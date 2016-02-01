define(function(require){
	var assert = require('intern/chai!assert');
	var registerSuite = require('intern!object');
    var LoginPage = require('../support/pages/LoginPage');
    var InterviewsPage = require('../support/pages/InterviewsPage');
    var ExcelUtility = require('../support/ExcelUtility.js');
    var loginPage;
    var interviewsPage;

	registerSuite({
		name: 'Suite Name',
		setup: function () {
			console.log("Setup called...");
            loginPage = new LoginPage(this.remote);
            interviewsPage = new InterviewsPage(this.remote);
            excelUtility = new ExcelUtility();
        },
		teardown: function () {
			console.log("Teardown called..");
        },
        'Login_positive': function () {
            this.async(60000);
            
            return loginPage.login(excelUtility.readValue('A')[0], excelUtility.readValue('B')[0])
                  .then(function (loggedIn) {
                        assert.isTrue(loggedIn,
                                      'Valid username and password should log in successfully');
                        });
        }/*,
        'Login_negative': function () {
            this.async(60000);
            return loginPage.login('wronguserid@chenoainc.com', excelUtility.readValue('B')[0])
                  .then(function (loggedIn) {
                        assert.isFalse(loggedIn,
                                      'Valid username and password should log in successfully');
                        });
        }
        ,
		'Interviewee': function () {
            console.log("Called Interviewee function...");
            this.async(180000);
            return interviewsPage.saveExit(excelUtility.readValue('A')[0], excelUtility.readValue('B')[0])
                  .then(function(text){
                            assert.strictEqual(text, "name-name test-test", "Text should be displayed when the form is submitted");
                        });
		}*/
	});
});