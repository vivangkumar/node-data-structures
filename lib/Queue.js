/**
 * Queue class (FIFO).
 * Inherits from Collection.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var Collection = require('./Collection.js');

 /**
  * Queue constructor.
  * Creates a new Queue.
  */
 function Queue() {
     Collection.apply(this, arguments);
 }

 Queue.prototype = new Collection();

 /**
  * Retrieves the head of the queue.
  * @return mixed
  */
 Queue.prototype.element = function() {
     if(this.getAll()[0]) {
         return this.getAll()[0];
     } else {
         throw Error("No such element.");
     }
 }

 /**
  * Retreive and remove top element of the queue.
  * @return mixed
  */
 Queue.prototype._removeTop = function() {
     return this.getAll().shift();
 }

 /**
  * Remove and return the head of the Queue.
  * @throws Error
  * @return mixed
  */
 Queue.prototype.remove = function() {
     var shift = this._removeTop();
     if(shift != undefined) {
         return shift;
     } else {
         throw Error("Queue is empty.");
     }
 }

 /**
  * Remove and return the head of the queue.
  * Differs from remove in that it does not throw an Error.
  * Return's null if Queue is empty.
  * @return mixed
  */
 Queue.prototype.poll = function() {
     var shift = this._removeTop();
     if(shift != undefined) {
         return shift;
     } else {
         return null;
     }
 }

 /**
  * Retrieves the head of the Queue.
  * Differs from element in that an Error is not thrown.
  * Returns null if Queue is empty.
  * @return mixed
  */
 Queue.prototype.peek = function() {
     if(this.getAll()[0]) {
         return this.getAll()[0];
     } else {
         return null;
     }
 }

 module.exports = Queue;
