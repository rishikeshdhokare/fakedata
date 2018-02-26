const util = require('../util');
const fakeBoolean = require('./boolean');

module.exports = {
  date: () => {
    let date = new Date();
    let d = fakeBoolean.boolean() ? date.getDate() + Math.round(Math.random() * 10) : date.getDate() - Math.round(Math.random() * 10)
    date.setDate(d);
    return date;
  }
};