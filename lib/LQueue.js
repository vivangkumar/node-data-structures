/**
 * LIFO Queue class.
 * Inherits from Queue.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var Queue = require('./Queue.js');
 var Collection = require('./Collection.js');

 /**
  * LQueue constructor.
  * Creates a new FIFO Queue.
  */
 function LQueue() {
     Queue.apply(this, arguments);
 }

 LQueue.prototype = new Queue();

 /**
  * Add new elements to the LQueue.
  * @param item
  * @return boolean
  */
 LQueue.prototype.add = function(item) {
     if(!item) return false;

     if(item instanceof Collection) {
         this._elements.unshift(item.getAll())
         return true;
     } else {
         this._elements.unshift(item);
         return true;
     }

     return false;
 }

 module.exports = LQueue;
