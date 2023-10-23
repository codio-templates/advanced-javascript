//Helper script used with the Try It button

const exec = require('child_process')
const fs = require('fs')
const http = require('https')

// path to student file
const studentFile = "/home/codio/workspace/student_code/circleAreaPartial.js"

// new location for testing
let newLocation = "/home/codio/workspace/.guides/secure/circleAreaPartial.js"

// copy student file to the new location
fs.copyFileSync(studentFile, newLocation)

// run the code test on student file
const points = exec.spawn("jest", [".guides/secure/circleAreaPartial.test.js", "--notify", "--config=.guides/secure/tryItConfig.json"], { cwd: "/home/codio/workspace", stdio: "inherit" })
