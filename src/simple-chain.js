const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

   arra: [],
	
    getLength() {
        return this.arra.length;
  },

    addLink(value) {
        if ( arguments.length > 0) {
            this.arra.push( "( " + String(value) + " )" );            
        }
      	else
        {
          this.arra.push( "()" );
        }
        return this;
  },

    removeLink(pos) {
        if (pos <1 || this.getLength() < pos || typeof pos !== "number" ) {
            this.arra = [];
            throw Error("Error removeLink");
        }
      	
        this.arra.splice(pos - 1, 1);
        return this;
      
  },

    reverseChain() {
        this.arra.reverse();
        return this;
  },

    finishChain() {
        var result = this.arra.join('~~');
        this.arra.splice(0, this.getLength());
        return result;
  }
  
  
};
module.exports = {
  chainMaker
};
