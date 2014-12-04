/**
 * Iterator class.
 *
 * Iterator implemented in JS.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var Collection = require('./Collection.js');

 function Iterator(collection) {
     if(collection instanceof Collection) this._collection = collection;
     this._pos = 0;
     this._lastElement;
 }

 /**
  * Properties
  */
 Iterator.prototype = {

     constructor: Iterator,

     /**
     * Returns the next element in the iteration.
     * @throws Error
     */
     next: function() {
         if(this._collection.getAll()[this._pos]) {
             this._pos += 1;
             this._lastElement = this._collection.getAll()[this._pos - 1];

             return this._collection.getAll()[this._pos - 1];
         } else {
             throw new Error('No such element.');
         }
     },

     /**
      * Returns true if there are more elements.
      * @return boolean
      * @throws Error
      */
     hasNext: function() {
         if(this.next()) return true;
     },

     /**
      * Remove last element from the collection.
      * @return boolean
      * @throws Error
      */
     remove: function() {
         if(this._lastElement) {
             this._collection.remove(this._lastElement);
         } else {
             throw new Error('Next() was not called.');
         }
     }
 }

 module.exports = Iterator;
