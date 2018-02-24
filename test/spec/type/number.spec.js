const expect = require('chai').expect;

describe('Number', () => {

  const fakedata = require('../../../src');

  it('should get random int', () => {
    expect(fakedata.int()).to.be.a('number');
    expect(fakedata.int(1, 9))
                   .to.be.at.least(1)
                   .and
                   .to.be.at.most(9);
  });

  it('should get random float', () => {
    expect(fakedata.float()).to.be.a('number');
    expect(fakedata.float(1, 9, 0, 9))
                   .to.be.at.least(1)
                   .and
                   .to.be.at.most(9.9);
    expect(fakedata.float(1, 9, 0, 99, 2))
                   .to.be.at.least(1)
                   .and
                   .to.be.at.most(9.99)
                   .and
                   .to.match(/\d.\d{1,3}/);
  });
});

