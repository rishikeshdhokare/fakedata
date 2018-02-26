const expect = require('chai').expect;
const fakedata = require('../../../src');

describe('Date', () => {
  it('should get random date', () => {
    expect(Object.prototype.toString.call(fakedata.date())).to.be.equal('[object Date]')
  });
});
