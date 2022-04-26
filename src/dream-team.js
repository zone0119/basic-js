const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
 
   counts = '';
      members.forEach((el) => {
        counts += typeof (el) === "string" ? el.split('')[0].toUpperCase() : '';
        
        
      });
  counts = counts.split('').sort().join('');
  //console.log('counts:' + counts);
  return counts;
}

module.exports = {
  createDreamTeam
};
