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
     var emptyCollection = new Collection();
     var collectionWithElements = new Collection("a", "b", "c");

     describe('Empty Collection', function() {
         it('should create a new collection with no elements which is an instance of Collection', function() {
             expect(emptyCollection).to.be.an.instanceof(Collection);
         });
     });

     describe('Collection with elements', function() {
         it('should create a new collection which is an instance of Collection', function() {
             expect(collectionWithElements).to.be.an.instanceof(Collection);
         });
         it('should have 3 elements', function() {
             collectionWithElements.elements.should.have.length(3);
         })
     });

     describe('Show collection', function() {
         it('should show all elements of a collection', function() {
             expect(collectionWithElements.show()).to.eql(["a", "b", "c"]);
         });
         it('should have 3 elements', function() {
             collectionWithElements.elements.should.have.length(3);
         });
     });

     describe('Collection size', function() {
         it('should return a size of 3', function() {
             collectionWithElements.size().should.equal(3);
         })
     });

     describe('Add', function() {
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
 });
