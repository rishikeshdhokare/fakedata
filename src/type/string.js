const util = require('../util');

const pools = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*()[]'
};
pools.alpha = pools.lower + pools.upper;
pools['undefined'] = pools.lower + pools.upper + pools.number + pools.symbol;

// TODO : use array functions
module.exports = {
  char: function (pool) {
    var _pool = ('' + pool).toLowerCase();
    pool = pools[_pool] || pool;
    return pool.charAt(this.natural(0, pool.length - 1));
  },

  string: function (pool, min, max) {
    var ret = '';
    var type = util.getType(pool);
    var argCount = arguments.length;
    var length;
    if (argCount === 3) {
      length = this.natural(min, max);
    } else if (argCount === 2) {
      if (type === 'string') {
        length = min;
      } else {
        length = this.natural(pool, min);
        pool = undefined;
      }
    } else if (argCount === 1) {
      if (type === 'number') {
        length = pool;
        pool = undefined;
      } else {
        length = this.natural(3, 7);
      }
    } else {
      pool = undefined;
      length = this.natural(3, 7);
    }
    while (length--) {
      ret += this.char(pool);
    }
    return ret;
  }
};
