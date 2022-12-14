# Unit Test Helper Script

This script copies the student code to `.guides/secure` and calls the unit test. Unlike previous examples of the helper script, this script **does not** perform a system exit or an HTTP request. Sending the student results back to Codio is handled by the test reporter.

### Setup Section
[Show Setup Section](open_file .guides/secure/jestHelperPartial.js panel=0 ref="const exec" count=9)

This section imports the modules needed, as well as declare constants for the student code and the new location for the student code.

### Copy the Student Code
[Show Copy Section](open_file .guides/secure/jestHelperPartial.js panel=0 ref="// copy" count=6)

This section copies the student code to the same directory as the testing scripts. If there is an error, the error will be logged to the console.

### Calling the Unit Test
[Show Unit Test Call Section](open_file .guides/secure/jestHelperPartial.js panel=0 ref="// run" count=2)

This section spawns a child process, which is the unit test. Notice that there are more arguments when calling the unit test in this instance. The most important is part is `"--config=.guides/secure/jest.config.json"`.

### Custom Test Reporter

The panel in the bottom-left is the configuration file for Jest. Since a test reporter needs to launch, the configuration file needs to tell Jest to use a custom test reporter. `myReporter.js` is the custom test reporter, and will be discussed on another page. 