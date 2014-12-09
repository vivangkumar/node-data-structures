/**
 * Sorted Set class.
 * Inherits from Set.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var Set = require('./Set.js');
 var Collection = require('./Collection.js');

 /**
  * Constructor for Set.
  * Creates a new Set.
  */
 function SortedSet() {
     Set.apply(this, arguments);
 }

  SortedSet.prototype = new Set();

 /**
  * Add a new element to the sorted Set.
  * Once an element is added, sort it.
  * @return boolean
  */
 SortedSet.prototype.add = function(item) {
     if(Set.prototype.add.call(this, item)) {
         this._sort(this._elements);
         return true;
     }

     return false;
 }

 /**
  * Add all elements to the sorted set.
  * @return boolean
  */
 SortedSet.prototype.addAll = function() {
     if(Set.prototype.addAll.apply(this, arguments)) {
         return true;
     }

     return false;
 }

 /**
  * Sort elements of the set recursively.
  * @param collection
  */
 SortedSet.prototype._sort = function(elements) {
     elements.sort();
     for(var i = 0; i < elements.length; i++ ) {
         if(elements[i] instanceof Collection)
             this._sort(elements[i].getAll());
         if(elements[i] instanceof Array)
             this._sort(elements[i]);
     }
 }

 /**
  * Return the first element in the SortedSet.
  */
 SortedSet.prototype.first = function() {
     return this.getAll()[0];
 }

 /**
  * Return the last element in the SortedSet.
  */
 SortedSet.prototype.last = function() {
     return this.getAll()[this.size() - 1];
 }

 /**
  * Returns a portion of the set whose elements are strictly less than end.
  * @param end
  * @throws Error
  * @returns SortedSet
  */
 SortedSet.prototype.headSet = function(end) {
     var headSet = new SortedSet();
     if(this.contains(end)) {
         for(var i = 0; i < this.getAll().indexOf(end); i++) {
             headSet.add(this.getAll()[i]);
         }

         return headSet;
     } else {
         throw Error("End element does not exist in collection.");
     }
 }

 /**
  * Return a portion of the set from start to end of the SortedSet.
  * Start is inclusive.
  * @param start
  * @throws Error
  * @returns SortedSet
  */
 SortedSet.prototype.tailSet = function(start) {
     var tailSet = new SortedSet();
     if(this.contains(start)) {
         for(var i = this.getAll().indexOf(start); i < this.size(); i++) {
             tailSet.add(this.getAll()[i]);
         }

         return tailSet;
     } else {
         throw Error("Start element does not exist in collection.");
     }
 }

 /**
  * Returns a portion of the collection from start to end.
  * Start is inclusive, but not end.
  * @param start
  * @param end
  * @throws Error
  * @return SortedSet
  */
 SortedSet.prototype.subSet = function(start, end) {
     var subSet = new SortedSet();
     if(this.containsAll(start, end)) {
         for(var i = this.getAll().indexOf(start); i < this.getAll().indexOf(end); i++) {
             subSet.add(this.getAll()[i]);
         }

         return subSet;
     } else {
         throw Error("Start and end do not exist in collection.");
     }
 }

 module.exports = SortedSet;
