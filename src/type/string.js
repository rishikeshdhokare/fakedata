const { LOWER_LETTERS, UPPER_LETTERS, NUMBERS, SYMBOLS } = require('../constants');

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
      noOfLowerLetters = Math.floor(length / 2);
      noOfUpperLetters = length - noOfLowerLetters;
    }

    let output = '';
    output += getChars(noOfLowerLetters, LOWER_LETTERS);
    output += getChars(noOfUpperLetters, UPPER_LETTERS);
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
      noOfLowerLetters = Math.floor(length / 3);
      noOfUpperLetters = Math.floor(length / 3);
      noOfNumbers = length - (noOfLowerLetters + noOfUpperLetters);
    }

    let output = '';
    output += getChars(noOfLowerLetters, LOWER_LETTERS);
    output += getChars(noOfUpperLetters, UPPER_LETTERS);
    output += getChars(noOfNumbers, NUMBERS);
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
      noOfLowerLetters = Math.floor(length / 4);
      noOfUpperLetters = Math.floor(length / 4);
      noOfNumbers = Math.floor(length / 4);
      noOfSymbols = length - (noOfLowerLetters + noOfUpperLetters + noOfNumbers);
    }

    let output = '';
    output += getChars(noOfLowerLetters, LOWER_LETTERS);
    output += getChars(noOfUpperLetters, UPPER_LETTERS);
    output += getChars(noOfNumbers, NUMBERS);
    output += getChars(noOfSymbols, SYMBOLS);
    return output;
  }
};
