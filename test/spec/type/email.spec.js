const expect = require('chai').expect;
const fakedata = require('../../../src/type/email');

describe('Email', () => {
  it('should get random email', () => {
    const fakeEmail = fakedata.email();
    expect(fakeEmail).to.be.a('string');
    expect(fakeEmail).to.have.lengthOf(15);
    expect(fakeEmail).to.contain('@')
                    .and.contain('.com');
  });
});
