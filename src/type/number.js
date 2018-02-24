const util = require('../util');

var exports = {
  int: (min, max) => {
    min = util.isNumber(min) ? util.toInt(min) : util.MIN_NUMBER;
    max = util.isNumber(max) ? util.toInt(max) : util.MAX_NUMBER;
    const range = util.getRange(min, max);
    min = range.min;
    max = range.max;
    return Math.round(Math.random() * (max - min)) + min;
  },

  natural: (min, max) => {
    min = util.isNumber(min) ? util.toInt(min) : 0;
    max = util.isNumber(max) ? util.toInt(max) : util.MAX_NUMBER;
    const range = util.getRange(min, max);
    min = range.min;
    max = range.max;
    return Math.round(Math.random() * (max - min)) + min;
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
