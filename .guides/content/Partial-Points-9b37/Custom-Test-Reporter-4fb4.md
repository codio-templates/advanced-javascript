# Custom Test Reporter

### Import the HTTP Module
[Show Setup Section](open_file .guides/secure/myReporter.js panel=0 ref="const" count=1)

The test reporter will be making the HTTP request to send the student score back to Codio. Because of this, import the HTTP module.

### Setting up the Reporter
[Show Setup Section](open_file .guides/secure/myReporter.js panel=0 ref="class" count=5)

This is some boilerplate code that Jest test reporters require.

### Test Result Event Listener
[Show Setup Section](open_file .guides/secure/myReporter.js panel=0 ref="onTestResult" count=9)

The `onTestResult` event listener will run once all of the tests have finished running. The parameter `results` is stored as a JSON, and contains all of the data related to the Jest unit tests. `results.testResults` is an array of JSON elements. There is a name-value pair called `status` that contains the string `passed` if the unit test passed. The reporter iterates through `results.testResults.status` and increments the variable `points` each time `status` value is `passed`.

### Passing the Grade to Codio
[Show Setup Section](open_file .guides/secure/myReporter.js panel=0 ref="// Make" count=3)

Once all of the passed unit tests have been counted, use an HTTP request as shown by the Codio [documentation](https://docs.codio.com/courses/assessments/#test-code-location).