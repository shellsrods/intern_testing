define(function(require){
	var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
	var XLSX = require('intern/dojo/node!xlsx');
	var fs = require('intern/dojo/node!fs');
	
	// Work with Excel (example from https://www.npmjs.com/package/xlsx)
	var no_of_rows = 3;
	var emails = new Array();
	var workbook = XLSX.readFile('examples/jquery-example/sample_test_data.xlsx');
	var first_sheet_name = workbook.SheetNames[0];
	var column = 'B';
	// Get worksheet 
	var worksheet = workbook.Sheets[first_sheet_name];
	// Get the value 
	for(var i=0; i < no_of_rows;i++){
		emails[i] = worksheet[column + (i+2)].v;
	}
	//console.log(emails);
	var url = '../../index.html';
	
	registerSuite({
		name: 'Todo (functional)',

		'submit form': function () {
			var self = this.remote;
			return this.remote
				.get(require.toUrl(url))
				.findById('new-todo')
				.click()
				.pressKeys(emails[0])
				.pressKeys('\n')
				.pressKeys(emails[1])
				.pressKeys('\n')
				.pressKeys(emails[2])
				.getProperty('value')
				.then(function (val) {
					self.takeScreenshot()
					.then(function(data) {
						fs.writeFileSync("../../../.jenkins/jobs/Run functional tests/workspace/shot.png", data, 'base64');
                    });
						
					assert.ok(val.indexOf('@fg.io') > -1, 'fg.io should be in the email');
				});
		}
	});
});