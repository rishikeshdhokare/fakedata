const util = require('./util');
const output = {};
const types = ['boolean', 'string', 'number', 'date'];

types.forEach(type => {
    const module = require('./type/' + type);
    for (let functionName in module) {
      if (util.hasKey(module, functionName)) {
        output[functionName] = module[functionName];
      }
    }
  });

module.exports = output;
