 /**
  * Collection tests.
  *
  * @author Vivan
  **/

 var chai = require('chai')
   , expect = chai.expect
   , assert = chai.assert
   , should = chai.should();

 var Collection = require('../lib/Collection.js');

 describe('Collection', function() {
     describe('Empty Collection', function() {
         it('should create a new collection with no elements which is an instance of Collection', function() {
             var emptyCollection = new Collection();
             expect(emptyCollection).to.be.an.instanceof(Collection);
         });
     });

     describe('Collection with elements', function() {
         var collectionWithElements = new Collection("a", "b", "c");
         it('should create a new collection which is an instance of Collection', function() {
             expect(collectionWithElements).to.be.an.instanceof(Collection);
         });
         it('should have 3 elements', function() {
             collectionWithElements.elements.should.have.length(3);
         })
     });

     describe('Show collection', function() {
         var collectionWithElements = new Collection("a", "b", "c");
         it('should show all elements of a collection', function() {
             expect(collectionWithElements.show()).to.eql(["a", "b", "c"]);
         });
         it('should have 3 elements', function() {
             collectionWithElements.elements.should.have.length(3);
         });
     });

     describe('Collection size', function() {
         var collectionWithElements = new Collection("a", "b", "c");
         it('should return a size of 3', function() {
             collectionWithElements.size().should.equal(3);
         })
     });

     describe('Add', function() {
         var emptyCollection = new Collection();
         it('should add a new element to the collection', function() {
             assert.isTrue(emptyCollection.add("x"));
         });
         it('should have a length 1', function() {
            emptyCollection.elements.should.have.length(1);
         });
         it('should have one element "x"', function() {
             expect(emptyCollection.show()).to.eql(["x"]);
         });
         it('should return false if no arguments are present', function() {
             assert.isFalse(emptyCollection.add());
         });
     });

     describe('Add all', function() {
         var emptyCollection = new Collection();
         it('should add all elements to the collection', function() {
             assert.isTrue(emptyCollection.addAll("x", "y", "z"));
         });
         it('should have a length of 3', function() {
             emptyCollection.elements.should.have.length(3);
         });
         it('should have 3 elements "x", "y", "z"', function() {
             expect(emptyCollection.show()).to.eql(["x", "y", "z"]);
         });
     });

     describe('Clear', function() {
         var collectionWithElements = new Collection("x", "y", "z");
         it('should not have any elements', function() {
             collectionWithElements.clear();
             expect(collectionWithElements.elements).to.be.empty;
         })
     });

     describe('Contains', function() {
         var collectionWithElements = new Collection("x", "y", "z");
         it('should contain "x"', function() {
             var exists = collectionWithElements.contains("x");
             assert.isTrue(exists);
         });
         it('should return false if element is not present', function() {
             var exists = collectionWithElements.contains("a");
             assert.isFalse(exists);
         });
     });

     describe('Contains all', function() {
         var collectionWithElements = new Collection("x", "y", "z");
         it('should contain "x" and "y"', function() {
             var exists = collectionWithElements.containsAll("x", "y");
             assert.isTrue(exists);
         });
         it('should return false if an element is not present', function() {
             var exists = collectionWithElements.containsAll("x", "a");
             assert.isFalse(exists);
         });
     });

     describe('Empty', function() {
         var collectionWithElements = new Collection("x", "y", "z");
         var emptyCollection = new Collection();
         it('should be false if elements are present', function() {
             var empty = collectionWithElements.isEmpty();
             assert.isFalse(empty);
         });
         it('should be true if no elements are present', function() {
             var empty = emptyCollection.isEmpty();
             assert.isTrue(empty);
         });
     });

     describe('Remove', function() {
         var collectionWithElements = new Collection("x", "y", "z");
         it('should return true if element is removed', function() {
             var removed = collectionWithElements.remove("x");
             assert.isTrue(removed);
         });
         it('should have a length 2', function() {
             expect(collectionWithElements.elements).to.have.length(2);
         });
         it('should return false if element cannot be removed', function() {
             var removed = collectionWithElements.remove("a");
             assert.isFalse(removed);
         });
         it('should be equal to ["y", "z"]', function() {
             expect(collectionWithElements.show()).to.eql(["y", "z"]);
         })
     });

     describe('Remove all', function() {
         var collectionWithElements = new Collection("x", "y", "z");
         it('should return true if all elements have been removed', function() {
             var removed = collectionWithElements.removeAll("x", "y");
             assert.isTrue(removed);
         });
         it('should return false if all elements cant be removed', function() {
             var removed = collectionWithElements.removeAll("a", "b");
             assert.isFalse(removed);
         });
         it('should be equal to ["z"]', function() {
             expect(collectionWithElements.show()).to.eql(["z"]);
         });
         it('should have a length 1', function() {
             collectionWithElements.elements.should.have.length(1);
         });
     });

     describe('Keep', function() {
         var collectionWithElements = new Collection("x", "y", "z");
         it('should keep "x", but discard "y" and "z"', function() {
             var keep = collectionWithElements.keep("x");
             assert.isTrue(keep);
         });
         it('should have a length 1', function() {
             collectionWithElements.elements.should.have.length(1);
         });
         it('should be equal to ["x"]', function() {
             expect(collectionWithElements.show()).to.be.eql(["x"]);
         })
     });

     describe('Equals', function() {
         var collectionOne = new Collection("x", "y", "z");
         var collectionTwo = new Collection("x", "y", "z");
         var collectionThree = new Collection("a", "b");
         var falseCollection = ["x", "y", "z"];

         it('should return true for collectionOne and collecitonTwo', function() {
             var equals = collectionOne.equals(collectionTwo);
             assert.isTrue(equals);
         });
         it('should return false for collectionOne and collectionThree', function() {
             var equals = collectionOne.equals(collectionThree);
             assert.isFalse(equals);
         });
         it('should return false if a collection is not an instance of Collection', function() {
             var equals = collectionOne.equals(falseCollection);
             assert.isFalse(equals);
         });
     });
 });
