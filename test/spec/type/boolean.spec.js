const expect = require('chai').expect;

describe('Boolean', () => {

  const fakedata = require('../../../src');

  it('should get random boolean', () => {
    expect(fakedata.boolean()).to.be.a('boolean');
    expect([true, false]).that.includes(fakedata.boolean());
  });
});
