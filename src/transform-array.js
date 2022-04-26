const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  
  if(!(arr instanceof Array)) {throw new Error()}
  
   var narr = [];
   
if (arr.length === 0) return arr;
  
   for (var i = 0; i < arr.length; i +=1)
   {
    if (arr[i] === "--discard-prev")
    {
      if(0 <= i-1 && arr[i-2] !='--discard-next')
      narr.pop();
      //console.log('t: '+ i);  
    }
     else if (arr[i] === "--discard-next")
     {
       if(i+1 < arr.length)
       i++;
     }
     else if (arr[i] === "--double-prev")
     {
     	 if(i-1 >= 0 && (arr[i - 2] !== '--discard-next'))
           narr.push(arr[i - 1]);
     }
     else if (arr[i] === "--double-next")
     {
       if(i+1 < arr.length && !(arr[i+1] instanceof String))
     	 narr.push(arr[i + 1]);
     }
     else  
     {
      narr.push(arr[i]);
     }
   }
   return narr;emove line with error and write your code here
}

module.exports = {
  transform
};
