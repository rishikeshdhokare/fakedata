const expect = require('chai').expect;
const fakedata = require('../../../src/type/string');

describe('String', () => {
  it('should get alphabetic string', () => {
    expect(fakedata.alphabetic(5)).to.have.lengthOf(5);
    expect(fakedata.alphabetic(6)).to.have.lengthOf(6);
  });

  it('should get alphanumeric string', () => {
    expect(fakedata.alphanumeric(5)).to.have.lengthOf(5);
    expect(fakedata.alphanumeric(6)).to.have.lengthOf(6);
  });

  it('should get random string', () => {
    expect(fakedata.random(4)).to.have.lengthOf(4);
    expect(fakedata.random(5)).to.have.lengthOf(5);
    expect(fakedata.random(6)).to.have.lengthOf(6);
  });
});