const util = require('../util');
const constants = require('../constants');

const getChars = (length, set) => {
  let chars = '';
  for(let i = 0; i < length; i++) {
    chars += set.charAt(Math.floor(Math.random() * set.length));
  }
  return chars;
};

module.exports = {
  alphabetic: length => {
    let noOfLowerLetters;
    let noOfUpperLetters;
    if (length % 2 === 0) {
      noOfLowerLetters = length / 2;
      noOfUpperLetters = length / 2;
    } else {
      noOfLowerLetters = parseInt(length / 2);
      noOfUpperLetters = length - noOfLowerLetters;
    }

    let output = '';
    output += getChars(noOfLowerLetters, constants.LOWER_LETTERS);
    output += getChars(noOfUpperLetters, constants.UPPER_LETTERS);
    return output;
  },

  alphanumeric: length => {
    let noOfLowerLetters;
    let noOfUpperLetters;
    let noOfNumbers;

    if (length % 3 === 0) {
      noOfLowerLetters = length / 3;
      noOfUpperLetters = length / 3;
      noOfNumbers = length / 3;
    } else {
      noOfLowerLetters = parseInt(length / 3);
      noOfUpperLetters = parseInt(length / 3);
      noOfNumbers = length - (noOfLowerLetters + noOfUpperLetters);
    }

    let output = '';
    output += getChars(noOfLowerLetters, constants.LOWER_LETTERS);
    output += getChars(noOfUpperLetters, constants.UPPER_LETTERS);
    output += getChars(noOfNumbers, constants.NUMBERS);
    return output;
  },

  random: length => {
    let noOfLowerLetters;
    let noOfUpperLetters;
    let noOfNumbers;
    let noOfSymbols;

    if (length % 4 === 0) {
      noOfLowerLetters = length / 4;
      noOfUpperLetters = length / 4;
      noOfNumbers = length / 4;
      noOfSymbols = length / 4;
    } else {
      noOfLowerLetters = parseInt(length / 4);
      noOfUpperLetters = parseInt(length / 4);
      noOfNumbers = parseInt(length / 4);
      noOfSymbols = length - (noOfLowerLetters + noOfUpperLetters + noOfNumbers);
    }

    let output = '';
    output += getChars(noOfLowerLetters, constants.LOWER_LETTERS);
    output += getChars(noOfUpperLetters, constants.UPPER_LETTERS);
    output += getChars(noOfNumbers, constants.NUMBERS);
    output += getChars(noOfSymbols, constants.SYMBOLS);
    return output;
  }
};
