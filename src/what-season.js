const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
   
  
  
  if (date === undefined){
   		return 'Unable to determine the time of year!'
   }
    if (date instanceof Date)
    {
   
  
  
  
  var month  = date.getMonth();
    
  if('12 1 2'.includes(month))
    return 'winter';
  
  if('3 4 5'.includes(month))
    return 'spring';
  
    if('6 7 8'.includes(month))
    return 'summer';
  
    if('9 10 11'.includes(month))
    return 'autumn';
  
    }
        else
     throw new Error('Error');
  
  
  
}

module.exports = {
  getSeason
};
