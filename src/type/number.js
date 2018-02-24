const util = require('../util');
const constants = require('../constants');

var exports = {
  int: (min, max) => {
    min = util.isNumber(min) ? util.toInt(min) : constants.MIN_NUMBER;
    max = util.isNumber(max) ? util.toInt(max) : constants.MAX_NUMBER;
    const range = util.getRange(min, max);
    return Math.round(Math.random() * (max - range.min)) + range.min;
  },
  
  float: (iMin, iMax, dMin, dMax, precision) => {
    const i = exports.int(iMin, iMax);
    const d = exports.int(dMin, dMax);
    let ret = [i, d].join('.');
    ret = util.toFloat(ret);
    if (util.isNumber(precision)) {
      precision = util.toInt(precision);
      ret = util.toFixed(util.toFloat(ret), precision);
    }
    return ret;
  }
};

module.exports = exports;
