# Adding the Assessment

![Student View](.guides/img/test_example_jest.png)

Follow the steps below to add an advanced code test to the Guide.

## Click the Chess Piece
Click on the chess piece to see all of the assessments that Codio provides. Select `Advanced Code Test`.

![Click Assessments](.guides/img/click-assessments.png)

## The General Section
Add a `Name` to your assessment. This will look like a "title" for the test. Leave some instructions for the student so they understand how to write their code to solve the problem.

![General Section](.guides/img/general_jest.png)

## The Execution Section
Set the `LANGUAGE TYPE` as `Custom`. The `COMMAND` should include the path of the helper file. **Note**, the helper file should be located in the `.guides` folder. The student code and test file need to be in the same directory. Use `python3` for the execution of the helper file, and set the working directory to `.guides/`. 

![Execution Section](.guides/img/execution_jest.png)

## The Grading Section
Toggle `ALLOW PARTIAL POINTS` if you want the question to have partial points. If you allow partial points, enter how many total points a student can earn. If not, leave `POINTS` as `1`. Toggle `DEFINED NUMBER OF ATTEMPTS` if you want to restrict students to a number of submissions. To give student rich and immediate feedback, toggle `SHOW RATIONALE TO STUDENT` and set the settings accordingly. Fill in the box below with a solution, and use [triple back ticks](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks) to create a code block.

![Grading Section](.guides/img/grading_jest.png)

## The Metadata Section
These assessments can be added to your organization's assessment library. Filling out the `Metadata` section with tags allows you and your colleagues to search for these assessments. 

![Metadata Section](.guides/img/metadata_jest.png)