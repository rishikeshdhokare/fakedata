const expect = require('chai').expect;
const fakedata = require('../../../src');

describe('Boolean', () => {
  it('should get random boolean', () => {
    expect(fakedata.boolean()).to.be.a('boolean');
    expect([true, false]).that.includes(fakedata.boolean());
  });
});
