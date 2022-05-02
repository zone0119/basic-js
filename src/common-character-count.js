const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let countCommon = 0;
  let arrayStrings1 = s1.split("");
  let arrayStrings2 = s2.split("");

      for (let i = 0; i < arrayStrings1.length; i++) {

        let index = arrayStrings2.indexOf(arrayStrings1[i]);
        if (index !== -1) {
        
          arrayStrings2[index] = '#'
          countCommon++;
        }

    }

    return countCommon;


}

module.exports = {
  getCommonCharacterCount
};
