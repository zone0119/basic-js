const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
 
  
            var counter=0;
             matrix = matrix.flat();
          for (var i = 0; i <= matrix.length; i++){
             if("^^" == matrix[i]  ) 
                counter++             
          }
          return counter;
}

module.exports = {
  countCats
};
