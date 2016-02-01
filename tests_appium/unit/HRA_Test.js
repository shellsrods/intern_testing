// var target = UIATarget.localTarget();
// 
// target.frontMostApp().mainWindow().textFields()[0].textFields()[0].tap();
// target.frontMostApp().keyboard().typeString("kmaheshwari@chenoainc");
// target.frontMostApp().keyboard().typeString(".com");
// target.frontMostApp().mainWindow().secureTextFields()[0].secureTextFields()[0].tap();
// target.frontMostApp().keyboard().typeString("password#12");
// target.frontMostApp().mainWindow().buttons()["SignIn"].tap();
// // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
// 
// target.frontMostApp().mainWindow().tableViews()[0].cells()["ER-15-12-001"].tap();
// target.frontMostApp().navigationBar().buttons()["Welcome Kapil O'Maheshwari"].tap();
// target.frontMostApp().mainWindow().buttons()["Dashboard"].tap();
// // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
// // Handle an internal alert
// UIATarget.onAlert = function onAlert(alert) {
//     return true;
// }
// target.frontMostApp().alert().buttons()["Yes"].tap();
// target.delay (2);
// target.frontMostApp().navigationBar().buttons()["Welcome Kapil O'Maheshwari"].tap();
// target.frontMostApp().mainWindow().buttons()["Logout"].tap();

define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'index',

        login: function () {
            
        }
    });
});