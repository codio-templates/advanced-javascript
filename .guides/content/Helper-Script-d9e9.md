# Helper Script

If your code test is in the `.guides/secure` directory and you want to import a student-created function or class, then you will need a helper script. The helper script will make a copy of the student code and paste the file in the same directory as the helper script and test script. This way there will be no issues importing the code to be tested.

## Workflow

The Codio advanced code test, should call the helper script, which copies/pastes the student code, then it calls the test script. Once the test script has run, it will return 0 (if all of the tests pass) or it will return 1 (if any of the tests fail) to the helper script, which will then use a system exit to return the 0 or 1 to Codio.

## Helper Script Example

This helper script (left) is written in Python. This is not a requirement; use whichever language best suits the task at hand. This template can be applied to any advanced code test. Be sure that the variables `student_file` and `new_location` point to the correct directories. Also, verify that `result` is executing the proper command to run the copy of the student code. **Note**, this helper script needs to call `jest` with the required parameters.
