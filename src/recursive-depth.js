const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
calculateDepth(arr ) {

   var count = 1;
    var arrDepth = 0;
   
 if (!(Array.isArray(arr))) return 1;
   
       arr.forEach((el) => {
              if (Array.isArray(el)) {
                        var arrDepth = this.calculateDepth(el) + 1;
                    if (arrDepth > count)  count = depth;
              }
   	 });
   
   
    return arrDepth;
  
    
    
    
  }
}

module.exports = {
  DepthCalculator
};
