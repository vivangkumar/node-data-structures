/**
 * Iterator class.
 *
 * Iterator implemented in JS.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 * @TODO Fix the iterator bug. FFS.
 */

 var Collection = require('./Collection.js');

 function Iterator(collection) {
     if(collection instanceof Collection) this._collection = collection;

     this._pos = 0;
     this._lastElement;
     this._collection.size() > 0 ? this._hasNext  = true : this._hasNext = false;
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
         /*if(this._pos <= this._collection.size()) {
             this._hasNext = true;

             return this._lastElement;
         } else {
             this._hasNext = false;
             return null;
         }*/
         return this._lastElement;
     },

     /**
      * Returns true if there are more elements.
      * @return boolean
      * @throws Error
      */
     hasNext: function() {
         console.log(this._pos);
         console.log(this._hasNext);

         if(this._pos <= this._collection.size()) {
             this._hasNext = true;
             this._lastElement = this._collection.getAll()[this._pos];
             this._pos ++;
         } else {
             this._hasNext = false;
         }
         
         return this._hasNext;
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
