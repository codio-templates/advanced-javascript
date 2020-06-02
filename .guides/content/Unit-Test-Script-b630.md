# Creating a Unit Test in Jest

## Coding the Test

Start by importing the function to be tested from the student code. Make sure that the student is exporting their work, and that the code test uses a helper function to copy the student code to the directory with the unit test. Jest uses something called a ["matcher"](https://jestjs.io/docs/en/using-matchers) that matches the result of a function to an expected output. A test passes when all of the test cases match their expected output. The example below is a test for the `circleArea` function.

```javascript
test('Check with positive numbers', () => {
  expect(circleArea(0)).toBe(0);
  expect(circleArea(1)).toBe(Math.PI);
  expect(circleArea(5)).toBe(Math.PI * Math.pow(5, 2));
});
```

The `expect` part of the test case calls the function to be tested with a parameter. The matcher `toBe` is the expected output from the student function. The above test has three test cases. All test cases must be true for the test to pass.

## Throwing Errors

Jest has a `toThrow` matcher, but it is not implemented like the `toBe` matcher above. Checking to see if the proper error message is thrown requires a wrapper around the function call to the student code. The test below checks for the error message when a non-numeric value is passed to the `circleArea` function.

```javascript
test('Check with non-numbers', () => {
  function nonNumbers() {
    circleArea("cat")
  }
  expect(nonNumbers).toThrow('Radius must be a number');
});
```

Notice that the test creates the function `nonNumbers` which calls `circleArea` with a string as a parameter. The test case calls `nonNumbers` and then uses the `toThrow` matcher.

## Running the Test

To check if the test is working as expected, open a terminal and type the following command:

```
jest .guides/secure/circleArea.test.js --notify --config=.guides/secure/tryItConfig.json
```

The above command requires that Jest be installed globally. The proper directory needs to be given to the test and the configuration file.