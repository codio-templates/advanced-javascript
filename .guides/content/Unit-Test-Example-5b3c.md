# Unit Test

This example uses the Jest testing framework to test student code that calculates the area of a circle. Students earn a point for each test they pass. Use the `TRY IT` button to run the test without calculating the student grade.

{try it}(node .guides/secure/jestHelperPartialTryIt.js)

{Check It!|assessment}(test-1899921671)

## How the Test Process Works

This unit test example uses a helper script, a unit test, and a test reporter. The helper script copies the student code to the `.guides/secure` folder and spawns a child process that is the unit test. The unit test evaluates the student code. The test reporter has an event listener for the conclusion of the unit test. Once the test is done, the reporter iterates over the test results and increments the variable `points` each time a test passed. Finally, the test reporter does an HTTP request that passes the student score back to Codio.