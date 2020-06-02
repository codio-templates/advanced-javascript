import os, shutil, sys

# path to student file
student_file = "/home/codio/workspace/student_code/circleArea.js" 

# new location for testing
new_location = "/home/codio/workspace/.guides/secure" 

# copy student file to the new location
shutil.copy(student_file, new_location)

# run the code test on student file
result = os.system("jest .guides/secure/circleArea.test.js --notify --config=.guides/secure/tryItConfig.json")

# Return the exit code to the Guide for the red "X" or green checkmark
if result == 0:
    sys.exit(0)
else:
    sys.exit(1)