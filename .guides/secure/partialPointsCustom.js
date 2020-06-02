const Laptop = require("./studentPartialPointsUnit.js")
let points = 0
let testLaptop = new Laptop("Apple", 13, 5, 16)

//Test Functions - Instance Variables

function checkManufacturer(laptop) {
  let testResult = false
  if(laptop.manufacturer === "Apple") {
    points++
    testResult = true
  }
  return testResult
}

function checkSize(laptop) {
  let testResult = false
  if(laptop.size === 13) {
    points++
    testResult = true
  }
  return testResult
}

function checkProcessor(laptop) {
  let testResult = false
  if(laptop.processor === 5) {
    points++
    testResult = true
  }
  return testResult
}

function checkRam(laptop) {
  let testResult = false
  if(laptop.ram === 16) {
    points++
    testResult = true
  }
  return testResult
}

//Test Function - Method

function checkMethod(laptop) {
  let testResult = false
  let student_output = laptop.printLaptop()
  let expected_output = "This is a 13-inch Apple laptop. It has a 5 GHz CPU and 16 GB of RAM."
  if(student_output === expected_output) {
    points++
    testResult = true
  }
  return testResult
}

//Testing Student Code
if(!checkManufacturer(testLaptop)) {
  console.log("<b>Manufacturer test did not pass</b>")
  console.log("Manufacturer did not match expected output")
}
if(!checkSize(testLaptop)) {
  console.log("<b>Size test did not pass</b>")
  console.log("Size did not match expected output")
}
if(!checkProcessor(testLaptop)) {
  console.log("<b>Processor test did not pass</b>")
  console.log("Processor did not match expected output")
}
if(!checkRam(testLaptop)) {
  console.log("<b>RAM test did not pass</b>")
  console.log("RAM did not match expected output")
}
if(!checkMethod(testLaptop)) {
  console.log("<b>Output test did not pass</b>")
  console.log("Output did not match expected output")
}

process.send(points)