# Installing the Framework

There is not a JavaScript unit testing framework installed by default on the Codio platform. You are free to use any framework you would like. The unit testing examples in this starter pack use Facebook's [Jest](https://jestjs.io/en/) testing framework. Jest also allows for DOM manipulation testing.

## Install Jest Globally

Most testing is done in the `.guides/secure` folder. Navigate to where you will keep your unit tests, and install Jest with NPM. Using the `global` flag means you can run the test from the command line, which is required for the advanced code test.

```javascript
npm install jest --global
```

## Create Jest Config File

Jest requires a config file in json format. In the directory with your unit tests, create a file called `tryItConfig.json`. Turn on the verbose mode for better error messages. Here are a [list](https://jestjs.io/docs/en/configuration) of all of the configuration options.

**Important**, the config file plays an important role if you are looking to have a partial points question with Jest. Config files for partial points problems need to call a test reporter that will send the student score back to Codio. You should have one config file for tests that do not make an HTTP request with the student and another config file for those tests that do make an HTTP request. More information on this can be found by clicking the button below. {Config File | go-to-section-titled}(unit test helper script)

```javascript
{
  "verbose": true
}
```
