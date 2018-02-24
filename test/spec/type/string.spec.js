const expect = require('chai').expect;

describe('String', () => {

  const fakedata = require('../../../src');

  it('should get random char', () => {
    expect('abcdefghijklmnopqrstuvwxyz').to.have.string(fakedata.char('lower'));
    expect('ABCDEFGHIJKLMNOPQRSTUVWXYZ').to.have.string(fakedata.char('upper'));
    expect('0123456789').to.have.string(fakedata.char('number'));
    expect('!@#$%^&*()[]').to.have.string(fakedata.char('symbol'));
    expect('asdf').to.have.string(fakedata.char('asdf'));
  });

  it('should get random string', () => {
    expect(fakedata.string('lower', 1, 9).length)
                 .to.be.at.least(1)
                 .and
                 .to.be.at.most(9);
    expect(fakedata.string('lower', 2).length).to.equal(2);
    expect(fakedata.string(1, 9).length)
                 .to.be.at.least(1)
                 .and
                 .to.be.at.most(9);
    expect(fakedata.string(2).length).to.equal(2);
    expect(fakedata.string('lower').length)
                 .to.be.at.least(3)
                 .and
                 .to.be.at.most(7);
    expect(fakedata.string().length)
                 .to.be.at.least(3)
                 .and
                 .to.be.at.most(7);
  });
});

