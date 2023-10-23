# The Custom Script

## Scripting Language
This grading script is written in Python. It could easily be written in Node or any other language. All this script does is parse the student code to check to see if certain criteria are met. It also compares the output of the student code with an expected answer. None of these tasks require a specific language for the actual test. Feel free to use the language with which you are most comfortable. The general structure of this test script should be helpful when you write your own tests.

## Setup

[See Setup](open_file .guides/secure/custom_code_test.py panel=0 ref="import" count=8)

The `os` module is used to create a file path to the student code, the `subprocess` module is used to run the student code, and the `sys` module is used to send the exit code to Codio.

The `path` variable contains the path to the student code, and the `file` variable contains the name of the student file. These two values are combined to create the `student_code` variable, which is used later on in the program. The `student_output` variable should contain the expected output of what the student code should produce.

## Functions

[See Functions](open_file .guides/secure/custom_code_test.py panel=0 ref="def" count=30)

Each function returns a boolean value and tests an aspect of the student code. One function that will always be there is `check_output`. The number of other functions and their specifics depend on the coding problem.

## Feedback

[See Feedback](open_file .guides/secure/custom_code_test.py panel=0 ref="if not" count=15)

Each function above is called separately. If they return `False`, then feedback should be given to the student as to why their code did not pass the code test. Output from `print` statements is rendered in the Guide, which is displayed on a webpage. So printing HTML tags will output HTML.

## Returning the Result

[See Result](open_file .guides/secure/custom_code_test.py panel=0 ref="if check" count=5)

If all of the above the functions return `True`, then the student code is correct. A system exit of `0` lets Codio know that the solution is correct. A system exit of `1` tells Codio that the student code is incorrect.