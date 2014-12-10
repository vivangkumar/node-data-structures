/**
 * Stack class.
 * Stack inherits from LQueue.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var LQueue = require('./LQueue.js');

 /**
  * Stack constructor.
  * Creates a new Stack.
  */
 function Stack() {
     LQueue.apply(this, arguments);
 }

 Stack.prototype = new LQueue();

 /**
  * Push a new item onto the Stack.
  * @param item
  * @return boolean
  */
 Stack.prototype.push = function(item) {
     if(LQueue.prototype.add.call(this, item)) {
         return true;
     }

     return false;
 }

 /**
  * Pop an item from the top of the Stack and return it.
  * @return mixed
  */
 Stack.prototype.pop = function() {
     try {
         return LQueue.prototype.remove.call(this);
     } catch (e) {
         throw Error('Stack is empty.');
     }
 }

 /**
  * Check if Stack is empty.
  * @return boolean
  */
 Stack.prototype.empty = function() {
     return LQueue.prototype.isEmpty.call(this);
 }

 /**
  * Search for an element in the Stack.
  * Return distance of item from top of Stack.
  * @return integer
  */
 Stack.prototype.search = function(item) {
     if(LQueue.prototype.contains.call(this, item)) {
         return this.getAll().indexOf(item) + 1;
     } else {
         throw Error("No such element");
     }
 }

 module.exports = Stack;
