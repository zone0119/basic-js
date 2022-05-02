const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */


 function deleteDigit(n ) {

 
	let collect = [];
  let nArr =  Array.from(String(n), Number);
 
 let str ='';
 
    for (let i = 0; i < nArr.length; i++) {
      
      str += nArr[i];
      console.log(str);
     
      if(n == str)
      {
        collect.push(+(str.substr(1)));
         collect.push(+(str.substr(-1)));
      }
      else
      {
      	collect.push(+str);
        collect.push( +str.substr(i) );
        
        collect.push(String(n).substr(0, i) + String(n).substr(i+1));
   
        
      }
      
    }

 

  return Math.max(...collect);
  
  

}
deleteDigit( 1001 ) 



module.exports = {
  deleteDigit
};
