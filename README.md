# Node JEST Unit Testing in JS

Treaversy Media Node JEST for beginners https://www.youtube.com/watch?v=7r4xVDI2vho&t=1427s

#### Install JEST
Run following command to install JEST
```
npm i -D jest
```
For intellisense to work for JEST we have to either run
```
jest init
```
and setup a configuration file for JEST or we have to install
```
npm install @types/jest
```
which will bring JEST intellisense for `describe`, `it` or `test`.

Setup `package.json` file for test case execution command. The script property will have a test property which will have a command named `jest`
```
"scripts": {
    "test": "jest"
},

// OR

"scripts": {
    "test": "jest --watchAll" // for watching changes
},
```

#### Write your first test
Create an app.js file to have some functions in it to begin our unit test cases on. The initial look of `app.js` is something like this:
```
const app = {
    add: (num1, num2) => num1 + num2
};

module.exports = app;
```
Now lets create a unit test file `app.test.js` for it. The code inside this unit test file will be as follows:
```
const app = require('./app');

describe('Testing App', function () {
    it('should add numbers', function () {
       expect(app.add(2, 2)).toBe(4)
    });
});
```
To run our test case open the terminal and run the following command:
```
npm test
```
The output for this will show the test results:
```
> jest-app@1.0.0 test C:\<folder_path>\node-jest-app
> jest

 PASS  ./app.test.js
  Testing App
    √ should add numbers (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.157s, estimated 2s
Ran all test suites.
```

#### Adding Axios for Async
For working with aysnc calls or HTTP we use axios
```
npm i axios
```
**Assertion:**
Verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.