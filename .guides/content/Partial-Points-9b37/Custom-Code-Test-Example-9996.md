# Custom Code Test

For this example, the student code is in the bottom-left panel and the test script is in the top-right panel. Click the button below to run the test on the student code. Alter either the test or student code to see how the test script handles tests that fail.

{Check It!|assessment}(test-4164966203)

## Setup
[Show Setup Section](open_file .guides/secure/partialPointsCustom.js panel=0 ref="const Laptop" count=3)

To begin the code test, import the student file, create an object based on the student work, and declare the variable `points`. 

## Declaring the Test Functions
[Show Function Declarations](open_file .guides/secure/partialPointsCustom.js panel=0 ref="//Test Functions - I" count=50)

In this example, the student work has four instance variables and one method. So there will be a function to test each of these elements. Each function will return a boolean value. If the boolean is `true`, then the `points` variable should be incremented by 1. 

## Calling the Test Functions
[Show Function Calls](open_file .guides/secure/partialPointsCustom.js panel=0 ref="//Testing Student Code" count=21)

Students should receive feedback about their code. If any of the test functions return `false`, then a short message is logged to the console explaining why the student lost a point. **Note**, output from an advanced code test responds to HTML elements, which is why the `console.log` statements have `<b>` tags.

## Returning the Points
[Show Message Passing](open_file .guides/secure/partialPointsCustom.js panel=0 ref="process.send" count=1)

Finally, the total number of points earned by the student is sent back to the helper script. As the test script is a child process of the helper script, `process.send` can be used to pass the `points` variable back to the parent process.