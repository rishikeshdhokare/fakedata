const util = require('../util');
const constants = require('../constants');

var exports = {
  int: (min, max) => {
    min = util.isNumber(min) ? util.toInt(min) : constants.MIN_NUMBER;
    max = util.isNumber(max) ? util.toInt(max) : constants.MAX_NUMBER;
    const range = util.getRange(min, max);
    return Math.round(Math.random() * (range.max - range.min) + range.min);
  },
  
  float: (min, max, precision) => {
    let output = util.toFloat([exports.int(min, max), exports.int(min, max)].join('.'));
    return util.isNumber(precision) ? util.toFixed(util.toFloat(output), util.toInt(precision)) : output;
  }
};

module.exports = exports;
