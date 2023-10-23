const http = require('https')

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }
  
  onTestResult(contexts, results){
    const testResults = results.testResults
    let feedback = ""
    let points = 0
    
    for (let i = 0; i < testResults.length; i++) {
      if (testResults[i].status === 'passed') {
        feedback += "<div>✓ Test " + (i+1) + ": "
        points++
      } else {
        feedback += "<div>✕ Test " + (i+1) + ": "
      }
      feedback += testResults[i].title +"</div>"
    }
    // Make HTTP request to send student score back to Codio
    let percentage = Math.round((points/testResults.length)*100)
    const url = `${process.env.CODIO_PARTIAL_POINTS_V2_URL}&points=${percentage}&format=html&feedback=${feedback}`
    const r = http.get(url)
  }
}

module.exports = MyCustomReporter;
