define(function () {
  var text = require('intern/dojo/text');
  var parser = require('tests/support/javaTestParser');
  var intern = require('intern');
  var Test = require('intern/lib/Test');

  // Return an AMD loader plugin…
  return {
    // When the plugin is requested as a dependency…
    load: function (resourceId, require, load) {
      // …load the associated resource ID…
      text.load(resourceId, function (code) {
        // …then use a parser to convert the raw test code into
        // a list of test names and functions…
        var tests = parser.parse(code);

        // …then register each test function with Intern…
        tests.forEach(function (testNode) {
          intern.executor.register(function (suite) {
            var test = new Test({
              name: testNode.name,
              test: testNode.fn,
              parent: suite
            });
            suite.tests.push(test);
          });
        });

        // …then tell the module loader that the everything is done loading
        load();
      });
    }
  };
});

