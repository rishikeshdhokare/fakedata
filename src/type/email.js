const string = require('./string');

module.exports = {
  email: () => string.alphabetic(5) + '@' + string.alphabetic(5) + '.com'
};