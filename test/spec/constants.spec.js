const expect = require('chai').expect;

describe('Constants', () => {

  const constants = require('../../src/constants');  

  it('should get constants', () => {
    expect(constants.MIN_NUMBER).to.be.equal(Number.MIN_SAFE_INTEGER);
    expect(constants.MAX_NUMBER).to.be.equal(Number.MAX_SAFE_INTEGER);
    expect(constants.MIDDLE).to.be.equal(0.5);
  });
});