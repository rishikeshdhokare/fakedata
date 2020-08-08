const { MIDDLE } = require('../constants');

module.exports = {
  boolean: () => Math.random() > MIDDLE
};