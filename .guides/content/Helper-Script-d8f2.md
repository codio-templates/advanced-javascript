# Helper Script

If your code test is in the `.guides/secure` directory and you want to import a student-created function or class, then you will need a helper script. The helper script will make a copy of the student code and paste the file in the same directory as the helper script and test script. This way there will be no issues importing the code to be tested.

## Scripting Language

The helper script can be written in any language you want as long as it can perform the necessary tasks. In the example below, both the helper script and grading script are written in Python.

## Workflow

The Codio advanced code test, should call the helper script, which copies/pastes the student code, then it calls the test script. Once the test script has run, it will use the system exit to return the 0 or 1 to the helper script, which will then use a system exit to return the 0 or 1 to Codio.

## Helper Script Example

This template for a helper script can be applied to any advanced code test. Be sure that the variables `student_file` and `new_location` point to the correct directories. Also, verify that `result` is executing the proper command to run the copy of the student code.

```python
import os, shutil, sys

# path to student file
student_file = "/home/codio/workspace/code/functions/lab_challenge.js" 

# new location for testing
new_location = "/home/codio/workspace/.guides/secure/unit_tests/functions" 

# copy student file to the new location
shutil.copy(student_file, new_location)

# run the code test on student file
result = os.system("python3 .guides/secure/unit_tests/functions/lab_challenge_test.py) 

# Return the exit code to the Guide for the red "X" or green checkmark
if result == 0:
    sys.exit(0)
else:
    sys.exit(1)
```