const expect = require('chai').expect;

describe('Util', () => {

  const util = require('../../src/util');  
  const obj = {'key': 'value'};

  it('should get empty string if object is `null` or `undefined`', () => {
    expect(util.getType(null)).to.be.equal('');
    expect(util.getType(undefined)).to.be.equal('');
  });

  it('should get type', () => {
    expect(util.getType('some string')).to.be.equal('string');
    expect(util.getType(123)).to.be.equal('number');
    expect(util.getType(true)).to.be.equal('boolean');
    expect(util.getType(obj)).to.be.equal('object');
    expect(util.getType([1, 2, 3])).to.be.equal('array');
  });

  it('should check if object has given key', () => {
    expect(util.hasKey(obj, 'key')).to.be.true;
    expect(util.hasKey(obj, 'unknownKey')).to.be.false;
  });

  it('should check if input is undefined', () => {
    expect(util.isUndefined(obj)).to.be.false;
    expect(util.isUndefined(undefined)).to.be.true;
  });

  it('should check if input is a number', () => {
    expect(util.isNumber(obj)).to.be.false;
    expect(util.isNumber(undefined)).to.be.false;
    //expect(util.isNumber('34')).to.be.false;
    expect(util.isNumber('abc')).to.be.false;
    expect(util.isNumber(1)).to.be.true;
    expect(util.isNumber(1.5)).to.be.true;
    expect(util.isNumber(-2.0)).to.be.true;
  });

  it('should parse the input into integer', () => {
    expect(util.toInt('15')).to.be.equal(15);
    expect(util.toInt('15.5')).to.be.equal(15);
    //expect(util.toInt('abc')).to.be.equal(NaN);
  });

  it('should parse the input into float', () => {
    expect(util.toFloat('15')).to.be.equal(15.0);
    expect(util.toFloat('15.5')).to.be.equal(15.5);
    //expect(util.toInt('abc')).to.be.equal(NaN);
  });

  it('should get precision of a float', () => {
    expect(util.getPrecision('15')).to.be.equal(0);
    expect(util.getPrecision('15.5')).to.be.equal(1);
    expect(util.getPrecision('15.1234')).to.be.equal(4);
  });

  it('should convert a float into fixed precision number', () => {
    expect(util.toFixed(15.12345, 2)).to.be.equal(15.12);
    expect(util.toFixed(15.12567, 3)).to.be.equal(15.126);
  });

  it('should get range', () => {
    const range1 = util.getRange(10, 20);
    expect(range1.min).to.be.equal(10);
    expect(range1.max).to.be.equal(20);

    const range2 = util.getRange(10, 10);
    expect(range2.min).to.be.equal(10);
    expect(range2.max).to.be.equal(10);
  });
});
