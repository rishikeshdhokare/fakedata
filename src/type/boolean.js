const constants = require('../constants');

module.exports = {
  boolean: () => Math.random() > constants.MIDDLE
};