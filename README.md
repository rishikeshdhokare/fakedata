# fakedata

![Build Status](https://img.shields.io/travis/rishikeshdhokare/fakedata/master.svg)
![Coverage Status](https://img.shields.io/coveralls/rishikeshdhokare/fakedata/master.svg)

> Javascript library to create test data.

How to install?

```
npm install fakedata
```

How to use?

```javascript
var fakedata = require('@rishikeshdhokare/fakedata');

var fakeBoolean = fakedata.boolean(); // true or false

var fakeInt = fakedata.int(1, 99); // random integer in range 1-99

var fakeFloat = fakedata.float(1, 99, 2); // random float in range 1-99 with 2 decimal point precision. e.g. 45.89

var fakeAlphabetic = fakedata.alphabetic(5); // random alphabetic string with length 5

var fakeAlphanumeric = fakedata.alphanumeric(5); // random alphanumeric string with length 5

var fakeRandomString = fakedata.random(5); // random string with alphabets, numbers and special characters with length 5
```