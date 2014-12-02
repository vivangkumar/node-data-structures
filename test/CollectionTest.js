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
         })
     });
     describe('Collection with elements', function() {
         it('should create a new collection with 3 elements and an instance of Collection', function() {
             expect(collectionWithElements).to.be.an.instanceof(Collection);
             collectionWithElements.elements.should.have.length(3);
         })
     });
     describe('Show collection', function() {
         it('should show all elements of a collection', function() {
             expect(collectionWithElements.show()).to.eql(["a", "b", "c"]);
         })
     })
 })
