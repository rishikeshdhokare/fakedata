const util = require('../util');

module.exports = {
  boolean: () => Math.random() > util.MIDDLE
};