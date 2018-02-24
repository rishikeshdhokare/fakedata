const expect = require('chai').expect;

describe('String', () => {

  const fakedata = require('../../../src');

  it('should get alphabetic string', () => {
    expect(fakedata.alphabetic(5)).to.have.lengthOf(5);
    expect(fakedata.alphabetic(6)).to.have.lengthOf(6);
  });

  it('should get alphanumeric string', () => {
    expect(fakedata.alphanumeric(5)).to.have.lengthOf(5);
    expect(fakedata.alphanumeric(6)).to.have.lengthOf(6);
  });

  it('should get random string', () => {
    expect(fakedata.random(5)).to.have.lengthOf(5);
    expect(fakedata.random(6)).to.have.lengthOf(6);
  });
});

