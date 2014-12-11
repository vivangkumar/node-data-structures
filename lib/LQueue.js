/**
 * LQueue class.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var Collection = require('./Collection.js');
 var Queue = require('./Queue.js');

 /**
  * LQueue constructor.
  * Creates a new LQueue.
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
     if(!item) {
         return false;
     }

     if(this._elements.unshift(Queue.prototype.normalise.call(this, item))) {
         return true;
     }

     return false;
 };

 module.exports = LQueue;
