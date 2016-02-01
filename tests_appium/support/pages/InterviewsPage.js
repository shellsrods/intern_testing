define(function (require) {
       
    function InterviewsPage(remote) {
       console.log("InterviewsPage constructor called!");
       this.remote = remote;
    }
       
    InterviewsPage.prototype = {
    constructor: InterviewsPage,
       
    saveExit: function (username, password) {
       var self = this.remote;
       return this.remote
       
       //login
       .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[1]").tap().clearValue().type(username).end()
       .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIASecureTextField[1]").tap().type(password).end()
       .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAButton[1]").tap().end()
       .setFindTimeout(5000)
       .findByName("I Agree").tap().end()
       
       //actual test
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
       //.findByName("Welcome sona purohit").tap().end()
       .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIANavigationBar[1]/UIAButton[1]").tap().end()
       .findByName("Save & Exit").tap().end()
       
       //Verify Entry
       .findByName("name-name test-test").getVisibleText()
       .then(function (text) {
                //logout
                //self.findByName("Welcome sona purohit").tap().end();
                self.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIANavigationBar[1]/UIAButton[1]").tap().end();
                self.findByName("Logout").tap().end();
                self.setFindTimeout(10000);
             
                return text;
             });
       
    }
    };
    return InterviewsPage;
});