# Installing the Linter

Codio offers both JSLint and JSHint as an [advanced code test](https://docs.codio.com/courses/assessments/#using-jshint-or-jslint). However, neither package is installed by default. Make sure that your stack has Node installed, and then install the linters globally with NPM. The following command installs both linters. The command can be modified to install only one linter.

```javascript
sudo npm install -g jshint jslint
```