/**
 * Collection data type.
 *
 * Collection implemented in JS.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 /**
  * Constructor for Collection.
  * Creates a new collection.
  */
 function Collection() {
     this._elements = [];
     var args = Array.prototype.slice.call(arguments, 0);

     for(var i = 0; i < args.length; i++) {
         this.add(args[i]);
     }
 }

 /**
  * Properties.
  */
 Collection.prototype = {

     constructor: Collection,

     /**
      * Returns contents of the collection.
      * @return Array
      */
     getAll: function() {
         return this._elements;
     },

     /**
      * Return a JSON encoded collection.
      * @return Object
      */
     toJson: function() {
         return JSON.stringify(this._elements);
     },

     /**
      * Return size of collection.
      * @return Integer
      */
     size: function() {
         return this._elements.length;
     },

     /**
      * Add an element to the collection.
      * @param items
      * @return boolean
      */
     add: function(item) {
         if(!item) return false;

         this._elements.push(item);
         return true;
     },

     /**
      * Add all elements to the collection.
      * @return boolean
      */
     addAll: function() {
         var result = true;
         var args;

         if(arguments[0] instanceof Collection) {
             args = arguments[0].getAll();
         } else {
             args = Array.prototype.slice.call(arguments, 0);
         }

         for(var i = 0; i < args.length; i++) {
             if(this.add(args[i])) {
                 result = true;
             }
         }

         return result;
     },

     /**
      * Clear the collection.
      */
     clear: function() {
         this._elements = [];
     },

     /**
      * Check if an element exists in a collection.
      * @param item
      * @return boolean
      */
     contains: function(item) {
         return this._elements.indexOf(item) >= 0;
     },

     /**
      * Check if all elements exist in a collection.
      * @return boolean
      */
     containsAll: function() {
         var args;

         if(arguments[0] instanceof Collection) {
             args = arguments[0].getAll();
         } else {
             args = Array.prototype.slice.call(arguments, 0);
         }

         for(var i = 0; i < args.length; i++) {
             if(!this.contains(args[i])) {
                 return false;
             }
         }

         return true;
     },

     /**
      * Check if the collection is empty.
      * @return boolean
      */
     isEmpty: function() {
         if(this._elements.length == 0) {
             return true;
         }

         return false;
     },

     /**
      * Remove an element from the collection.
      * @param item
      * @return boolean
      */
     remove: function(item) {
         if(this.contains(item)) {
             var index = this._elements.indexOf(item);
             if(index > -1) {
                 this._elements.splice(index, 1);
                 return true;
             }
         }

         return false;
     },

     /**
      * Remove all elements in the collection.
      * @return boolean
      */
     removeAll: function() {
         var result = false;
         var args;

         if(arguments[0] instanceof Collection) {
             args = arguments[0].getAll();
         } else {
             args = Array.prototype.slice.call(arguments, 0);
         }

         for(var i = 0; i < args.length; i++) {
             if(this.remove(args[i])) {
                 result = true;
             }
         }

         return result;
     },

     /**
      * Returns the difference.
      */
     _difference: function(array) {
        return this._elements.filter(function(i) {
            return array.indexOf(i) === -1;
        });
     },

     /**
      * Keep only elements mentioned, while discarding all others.
      * @return boolean
      */
     keep: function() {
         var args;
         var diffArgs = new Collection();

         if(arguments[0] instanceof Collection) {
             args = arguments[0].getAll();
         } else {
             args = Array.prototype.slice.call(arguments, 0);
         }

         var diff = this._difference(args);
         for(var i = 0; i < diff.length; i++) diffArgs.add(diff[i]);

         if(this.removeAll(diffArgs)) {
             return true;
         }

         return false;
     },

     /**
      * Check if two collections are equal.
      * @param collection
      * @return boolean
      */
     equals: function(collection) {
         if(!(collection instanceof Collection)) return false;
             if(this.size() != collection.size()) return false;
             for(var i = 0; i < this.size(); i++) {
                 if(this.getAll()[i] instanceof Collection && collection.getAll()[i] instanceof Collection) {
                     if(!this.getAll()[i].equals(collection.getAll()[i])) return false;
                 } else if(this.getAll()[i] != collection.getAll()[i]) {
                     return false;
                 }
             }

         return true;
     }
 }

 module.exports = Collection;
