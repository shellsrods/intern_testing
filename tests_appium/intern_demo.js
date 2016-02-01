// Learn more about configuring this file at <https://theintern.github.io/intern/#configuration>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites
define({
	// Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
	// specified browser environments in the `environments` array below as well. See
	// <https://theintern.github.io/intern/#option-capabilities> for links to the different capabilities options for
	// different services.
	//
	// Note that the `build` capability will be filled in with the current commit ID or build tag from the CI
	// environment automatically
	capabilities: {
		//‘browserstack.selenium_version': '2.45.0',
		//‘idle-timeout': 120
	},

	// Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
	// OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
	// capabilities options specified for an environment will be copied as-is
	environments: [
	 {
      /*device: 'iPad Air',
      CFBundleName: 'HRAcuity',
      CFBundleVersion: ‘1.0.0’,*/
      // required for ios-driver to use iOS Simulator
      simulator: true,
	platformName:'iOS',
	//platformVersion:'9.2',
    platformVersion:'8.2',
	//udid:'06965f40a324ece839f9f9e1fa6fba91e6a9099e',
	//deviceName:'Chenoa iPad 1',
	deviceName:'iPad 2',
      fixSessionCapabilities: false
    }
// 		{ browserName: 'internet explorer', version: '11', platform: 'WIN8' },
// 		{ browserName: 'internet explorer', version: '10', platform: 'WIN8' },
// 		{ browserName: 'internet explorer', version: '9', platform: 'WINDOWS' },
// 		{ browserName: 'firefox', version: '37', platform: [ 'WINDOWS', 'MAC' ] },
// 		{ browserName: 'chrome', version: '39', platform: [ 'WINDOWS', 'MAC' ] },
// 		{ browserName: 'safari', version: '8', platform: 'MAC' }
	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 2,

	// Name of the tunnel class to use for WebDriver tests.
	// See <https://theintern.github.io/intern/#option-tunnel> for built-in options
	//tunnel: 'BrowserStackTunnel',
	tunnel: "NullTunnel",
	tunnelOptions: {
        	hostname: "192.168.133.149",
        	port: 4723
	},
	// Configuration options for the module loader; any AMD configuration options supported by the AMD loader in use
	// can be used here.
	// If you want to use a different loader than the default loader, see
	// <https://theintern.github.io/intern/#option-useLoader> for instruction
	loaderOptions: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ { name: 'myPackage', location: '.' } ]
	},

	// Non-functional test suite(s) to run in each browser
	suites: [ /* 'tests/unit/HRA_Test' */ /* 'myPackage/tests/foo', 'myPackage/tests/bar' */ ],

	// Functional test suite(s) to execute against each browser once non-functional tests are completed
	functionalSuites: [ /*'tests/functional/index_sheldon' 'myPackage/tests/functional' */ 'tests/functional/demo_tests' ],

       reporters: [ /*{id:'Pretty'},*/
                   {id:'JUnit', filename:'/Users/admin/jenkins_node/workspace/report.xml'}
                   ],
       /*reporters: [
                   { id: 'JUnit', filename: 'report.xml' }
                   ],*/
       
       /*runnerClientReporter: [
                { id: 'WebDriver', waitForRunner: true }
       ],*/

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^(?:tests|node_modules)\//
});
