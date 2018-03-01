const expect = require('chai').expect;
const fakedata = require('../../../src/type/boolean');

describe('Boolean', () => {
  it('should get random boolean', () => {
    const fakeBoolean = fakedata.boolean();
    expect(fakeBoolean).to.be.a('boolean');
    expect([true, false]).that.includes(fakeBoolean);
  });
});
