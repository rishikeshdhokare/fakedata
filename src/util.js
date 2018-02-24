const constants = require('./constants');

var exports = {
  getType: obj => obj === null || obj === undefined ? '' : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase(),

  hasKey: (obj, key) => obj && Object.prototype.hasOwnProperty.call(obj, key),

  isUndefined: val => typeof val === 'undefined',

  isNumber: val => !exports.isUndefined(val) && !isNaN(val),

  toInt: val => parseInt(val, 10),

  toFloat: val => parseFloat(val),

  getPrecision: float => {
    var tail = (float + '').split('.')[1];
    return tail ? tail.length : 0;
  },

  toFixed: (val, precision) => {
    precision = Math.abs(precision);
    var power = Math.pow(10, precision);
    var ret = (Math.round(val * power) / power).toFixed(precision);
    return parseFloat(ret);
  },
  
  getRange: (val1, val2) => {
    return {
      min: Math.min(val1, val2),
      max: Math.max(val1, val2)
    };
  }
};

module.exports = exports;
