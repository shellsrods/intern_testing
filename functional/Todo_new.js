define(function(require){
	var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
	var XLSX = require('examples/jquery-example/node_modules/xlsx/xlsx');
	
	// Work with Excel (example from https://www.npmjs.com/package/xlsx)
	var no_of_rows = 3;
	var emails = new Array();//console.log("xlsx"+XLSX);
	var workbook = XLSX.readFile('../../sample_test_data.xlsx');
	var first_sheet_name = workbook.SheetNames[0];
	var column = 'B';
	/* Get worksheet */
	var worksheet = workbook.Sheets[first_sheet_name];
	/* Get the value */
	for(var i=1; i <= no_of_rows;i++){
		emails[i-1] = worksheet[column + i].v;
	}
	
	var url = '../../index.html';
	
	registerSuite({
		name: 'Todo (functional)',

		'submit form': function () {
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
					assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
				});
		}
	});
});
define([
	'intern!object',
	'intern/chai!assert',
	'require',
	'examples/jquery-example/node_modules/xlsx/xlsx'
], function (registerSuite, assert, require, XLSX) {
	// work with Excel (example from https://www.npmjs.com/package/xlsx)
	var no_of_rows = 3;
	var emails = new Array();//console.log("xlsx"+XLSX);
	var workbook = XLSX.readFile('../../sample_test_data.xlsx');
	var first_sheet_name = workbook.SheetNames[0];
	var column = 'B';
	//var address_of_cell = 'B2';
	/* Get worksheet */
	var worksheet = workbook.Sheets[first_sheet_name];
	/* Find desired cell */
	//var desired_cell = worksheet[column+];
	/* Get the value */
	for(var i=1; i <= no_of_rows;i++){
		emails[i-1] = worksheet[column + i].v;
	}
	//var desired_value = desired_cell.v;
	
	var url = '../../index.html';

	registerSuite({
		name: 'Todo (functional)',

		'submit form': function () {
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
					assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
				});
		}
	});
});