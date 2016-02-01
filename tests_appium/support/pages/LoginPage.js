define(function (require) {
       
    function LoginPage(remote) {
       console.log("LoginPage constructor called!");
       this.remote = remote;
    }
       
    LoginPage.prototype = {
    constructor: LoginPage,
       
    login: function (username, password) {
       var self = this.remote;
       return this.remote
       .setFindTimeout(50000)
       .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIATextField[1]").tap().clearValue().type(username).end()
       .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIASecureTextField[1]").tap().type(password).end()
       .findByXpath("//UIAApplication[1]/UIAWindow[1]/UIAButton[1]").tap().end()
       .setFindTimeout(5000)
       
       .findByXpath("//UIAApplication[1]/UIAWindow[4]/UIAAlert[1]").getAlertText()
       .then(function (text) {
             self.acceptAlert();
             //logout
             
             self.findByXpath("//UIAApplication[1]/UIAWindow[1]/UIANavigationBar[1]/UIAButton[1]").tap().end();
             self.findByName("Logout").tap().end();
             self.setFindTimeout(10000);
             
             return text.indexOf("You are about to enter a confidential site containing sensitive information")<0? false:true;
        });
       }
    };
    return LoginPage;
});

