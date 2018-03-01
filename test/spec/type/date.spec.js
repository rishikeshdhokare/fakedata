const expect = require('chai').expect;
const fakedata = require('../../../src/type/date');

describe('Date', () => {
  it('should get random date', () => {
    expect(Object.getPrototypeOf(fakedata.date())).to.be.equal(Date.prototype);
  });
});