const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
    if(!(Number.isInteger(sampleActivity))) {
      return false;
    }
  
   if(typeof sampleActivity !== "string") {
    return false;
  }
  
     if(sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  
       if(sampleActivity < 0) {
    return false;
  }
  
  k= 0.693/HALF_LIFE_PERIOD;
  t = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity));
  z = Math.ceil(t/k);
  //console.log('z:' + z);
  return z;
}

module.exports = {
  dateSample
};
