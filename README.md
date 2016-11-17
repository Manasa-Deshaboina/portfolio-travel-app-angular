# Travel Application - developed on AngularJS platform
This is a minimalistic UI application using AngularJs to demostrate framework capabilities and MVC design pattern implementation. All the server communicaitons are mocked using mockdata.

Application configured to install the Angular framework and a bunch of development and testing tools for running the application using Node.js and Bower capabilities.

Travel application got few screens and with navigation.

## Getting Started
Clone the travel-app from repository and install the dependencies:

### Prerequisites
Basic core software required are: Git, Node.js and its package manager (npm). 

### Clone travel-app
```
git clone https://github.com/Manasa-Deshaboina/portfolio-travel-app-angular.git
cd portfolio-travel-app-angular
```

### Install Dependencies
Application uses two kinds of dependencies: 
a. tools 
b. angular and libraries. 

The tools help us manage and test the application.

`npm` is preconfigured (package.json) to automatically run bower so you can install all required library dependencies (bower.json) with following command: 
```
npm install
```

### Run the Application
Preconfigured a simple dev web server, start it using:
```
npm start
```
Now browse to the app at `http://localhost:8000/app/index.html`.


## Testing
### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```
