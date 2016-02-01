define(function (require) {
       
    var XLSX = require('intern/dojo/node!xlsx');
    var fs = require('intern/dojo/node!fs');
       
       
    function ExcelUtility() {
       //console.log("LoginPage constructor called!");
       //this.remote = remote;
    }
       
    ExcelUtility.prototype = {
       constructor: ExcelUtility,
       
       readValue: function (column) {
       //////////////////////////////////////
        // Work with Excel (example from https://www.npmjs.com/package/xlsx)
        var no_of_rows = 1;
        var values = new Array();
        var workbook = XLSX.readFile('tests/support/sample_test_data.xlsx');
        var first_sheet_name = workbook.SheetNames[0];
        // Get worksheet
        var worksheet = workbook.Sheets[first_sheet_name];
        // Get the value
        for(var i=0; i < no_of_rows;i++){
            values[i] = worksheet[column + (i+2)].v;
        }
        console.log(values);
        return values;
       ///////////////////////////////////////

       }
    };
    return ExcelUtility;
});

