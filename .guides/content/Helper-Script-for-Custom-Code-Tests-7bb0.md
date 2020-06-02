# Helper Script

If your test is in the `.guides/secure` directory and you want to import a student-created function or class, then you will need a helper script. The helper script will make a copy of the student code and paste the file in the same directory as the helper script and test script. This way there will be no issues importing the code to be tested.

## Workflow

The Codio advanced code test should call the helper script, which copies/pastes the student code, then forks a child process that is the test script. The helper script listens for a message from the test script. This message should contain the number of points the student earned. Finally, the helper script uses an HTTP request to pass the points to Codio.

## Helper Script Example

Be sure that the variables `studentFile` and `newLocation` point to the correct paths. Also, verify that `points` is executing the proper command to run the copy of the student code. This helper script needs to import the `child_process`, `fs`, and `https` modules. Once the test script has finished calculating the total points, `process.send(points)` sends the student points from the child process (the test script) to the parent script (the helper script). The helper scrip uses the `process.on('message')` event listener to receive the points and send them to Codio.
