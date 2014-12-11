/**
 * Set class.
 * Inherits from Collection.
 * Set implemented in JS.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var Collection = require('./Collection.js');

 /**
  * Constructor for Set.
  * Creates a new Set.
  */
 function Set() {
     Collection.apply(this, arguments);
 }

 Set.prototype = new Collection();

 /**
  * Add a new element to the Set.
  * @return boolean
  */
 Set.prototype.add = function(item) {
     if(!Collection.prototype.contains.call(this, item)) {
         if(Collection.prototype.add.call(this, item)) {
             return true;
         }
     }

     return false;
 };

 /**
  * Add all elements to the set.
  * @return boolean
  */
 Set.prototype.addAll = function() {
     var args = Array.prototype.slice.call(arguments);
     var result = false;

     for(var i = 0; i < args.length; i++) {
         if(this.add(args[i])) {
             result = true;
         }
     }

     return result;
 };

 module.exports = Set;
