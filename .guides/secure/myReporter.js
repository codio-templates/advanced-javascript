const http = require('https')

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }
  
  onTestResult(contexts, results){
    const testResults = results.testResults
    let points = 0
    
    for (let i = 0; i < testResults.length; i++) {
      if (testResults[i].status === 'passed') {
        points++
      }
    }
    // Make HTTP request to send student score back to Codio
    const url = `${process.env.CODIO_PARTIAL_POINTS_URL}&points=${points}`
    const r = http.get(url)
  }
}

module.exports = MyCustomReporter;
