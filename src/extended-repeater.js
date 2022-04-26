const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
 
   var {
        repeatTimes = (options.repeatTimes === undefined) ? 1 : options.repeatTimes,
        separator = (options.repeatTimes === undefined) ? '+' : options.separator,
        addition = (options.repeatTimes === undefined) ? '' : options.addition,
        additionRepeatTimes = (options.additionRepeatTimes === undefined) ? 1 : parseInt(options.additionRepeatTimes),
        additionSeparator = (options.additionSeparator === undefined) ? '|' : options.additionSeparator
    } = options;      
    var res = (addition + additionSeparator).repeat(additionRepeatTimes).split(additionSeparator).slice(0, -1).join(additionSeparator);
    
  return (str + res + separator).repeat(repeatTimes).split(separator).slice(0, -1).join(separator);
 
}

module.exports = {
  repeater
};
