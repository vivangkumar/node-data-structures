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

     this._pos = -1;
     this._nextElement;
     this._nextCalled = false;
     this._hasNextCalled = false;
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
         this._nextCalled = true;
         if(this._collection.size() > 0) {
             if(this._hasNextCalled) {
                 this._hasNextCalled = false;
                 this._pos --;
             }

             this._pos ++;
             this._nextElement = this._collection.getAll()[this._pos];

             if(this._nextElement != undefined) {
                 return this._nextElement;
             } else {
                 throw new Error("No such element.");
             }
         }
     },

     /**
      * Returns true if there are more elements.
      * @return boolean
      * @throws Error
      */
     hasNext: function() {

         this._collection.getAll()[this._pos + 1] ? this._hasNext = true : this._hasNext = false;
         if(!this._nextCalled) {
             this._pos ++;
             this._hasNextCalled = true;
         }

         return this._hasNext;
     },

     /**
      * Remove last iterated element from the collection.
      * @return boolean
      * @throws Error
      */
     remove: function() {
         if(this._nextElement) {
             this._collection.remove(this._nextElement);
         } else {
             throw new Error('Next() was not called.');
         }
     }
 }

 module.exports = Iterator;
