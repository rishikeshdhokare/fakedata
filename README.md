# fakedata

![Build Status](https://img.shields.io/travis/rishikeshdhokare/fakedata/master.svg)
![Coverage Status](https://img.shields.io/coveralls/rishikeshdhokare/fakedata/master.svg)

> Javascript library to create test data.

How to install?

```
npm install @rishikeshdhokare/fakedata
```

Following are the set of api exposed through this library - 

|API|Description|Example|
|---|---|---|
|**fakedata.boolean()**|returns `true` or `false`|true, false|
|**fakedata.int(min, max)**|returns an `integer` greater than `min` and lower than `max`|for `min=1 & max=10` - 5, 9|
|**fakedata.float(min, max, precision)**|returns a `float` greater than `min` and lower than `max` with `precision`|for `min=1, max=10 & precision=2` - 5.5, 9.4|
|**fakedata.alphabetic(length)**|alphabetic string with `length`|for `length=5` - akqde|
|**fakedata.alphanumeric(length)**|alphanumeric string with `length`|for `length=5` - miv97|
|**fakedata.random(length)**|string with alphabets, numbers and special characters with `length`|for `length=5` - es28%|
|**fakedata.date()**|random date|Mon Feb 26 2018 22:31:26 GMT+0530 (IST)|