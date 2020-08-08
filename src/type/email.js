const string = require('./string');
const { AT_SIGN, DOT_COM } = require("../constants");

module.exports = {
  email: () => string.alphabetic(5) + AT_SIGN + string.alphabetic(5) + DOT_COM
};