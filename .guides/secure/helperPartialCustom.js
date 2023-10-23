const exec = require('child_process')
const fs = require('fs')
const http = require('https')

// path to student file
const studentFile = "/home/codio/workspace/student_code/studentPartialPointsUnit.js"

// new location for testing
let newLocation = "/home/codio/workspace/.guides/secure/studentPartialPointsUnit.js"

// copy student file to the new location
fs.copyFileSync(studentFile, newLocation)

// run the code test on student file
const points = exec.fork("/home/codio/workspace/.guides/secure/partialPointsCustom.js")

// make HTTP request and pass student points to LMS
points.on('message', (msg) => {
  console.log(`<b>Student received ${msg} points.</b>`)
  const url = `${process.env.CODIO_PARTIAL_POINTS_URL}&points=${msg}`
  const r = http.get(url)
});
