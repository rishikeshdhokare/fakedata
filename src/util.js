const utils = {
  getType: obj => obj === null || obj === undefined ? '' : Object.prototype.toString.call(obj).match(/\[object (\w+)/)[1].toLowerCase(),

  hasKey: (obj, key) => obj && Object.prototype.hasOwnProperty.call(obj, key),

  isUndefined: val => typeof val === 'undefined',

  isNumber: val => !utils.isUndefined(val) && !isNaN(val),

  toInt: val => parseInt(val, 10),

  toFloat: val => parseFloat(val),

  getPrecision: float => {
    const tail = (float + '').split('.')[1];
    return tail ? tail.length : 0;
  },

  toFixed: (val, precision) => {
    precision = Math.abs(precision);
    const power = Math.pow(10, precision);
    const ret = (Math.round(val * power) / power).toFixed(precision);
    return parseFloat(ret);
  },
  
  getRange: (min, max) => {
    return {
      min: Math.min(min, max),
      max: Math.max(min, max)
    };
  }
};

module.exports = utils;
