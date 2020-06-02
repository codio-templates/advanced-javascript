import os, shutil, sys, requests

# path to student file
student_file = "/home/codio/workspace/student_code/studentPartialPointsUnit.js"

# new location for testing
new_location = "/home/codio/workspace/.guides/secure"

# copy student file to the new location
shutil.copy(student_file, new_location)

# run the code test on student file
points = os.system("node .guides/secure/partial_points_custom.js")
print(points)
print(int(points))
print(f"The Python helper script received {points} points.")


# make HTTP request and pass student points to LMS
# url = "{0}&points={1}".format(os.environ['CODIO_PARTIAL_POINTS_URL'], points)
# r = requests.get(url)
