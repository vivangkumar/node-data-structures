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
 var Iterator = require('../lib/Iterator.js');
 var Set = require('../lib/Set.js');

 describe('Collection Iterator', function() {
     describe('Next', function() {
         var collection = new Collection("a", "b");
         var iterator = new Iterator(collection);
         it('should return "a" in the first iteration', function() {
             expect(iterator.next()).to.be.equal("a");
         });
         it('should return "b" in the second iteration', function() {
             expect(iterator.next()).to.be.equal("b");
         });
         it('should throw an error for next iteration', function() {
             expect(iterator.next.bind(iterator)).to.throw(Error);
         });
     });

     describe('Has next', function() {
         var collection = new Collection("a", "b");
         var iterator = new Iterator(collection);
         it('should return true for first iteration', function() {
             expect(iterator.hasNext()).to.be.true();
         });
         it('should return true for second iteration', function() {
             expect(iterator.hasNext()).to.be.true();
         });
         it('should throw error for next iteration', function() {
             expect(iterator.hasNext.bind(iterator)).to.throw(Error);
         });
     });

     describe('Remove', function() {
         var collectionOne = new Collection("a", "b", "c");
         var iteratorOne = new Iterator(collectionOne);
         var collectionTwo = new Collection("a", "b", "c");
         var iteratorTwo = new Iterator(collectionTwo);

         it('should remove "a" from the collection', function() {
             var next = iteratorOne.next();
             expect(iteratorOne.remove()).to.be.undefined;
         });
         it('should contain only two elements', function() {
             expect(collectionOne.size()).to.be.equal(2);
         });
         it('should contain only "b" and "c"', function() {
             expect(collectionOne.getAll()).to.be.eql(["b", "c"]);
         });
         it('should throw an error when next is not called', function() {
             expect(iteratorTwo.remove.bind(iteratorTwo)).to.throw(Error);
         });
     });
 });

 describe('Set Iterator', function() {
     describe('Next', function() {
         var set = new Set("a", "b");
         var iterator = new Iterator(set);
         it('should return "a" in the first iteration', function() {
             expect(iterator.next()).to.be.equal("a");
         });
         it('should return "b" in the second iteration', function() {
             expect(iterator.next()).to.be.equal("b");
         });
         it('should throw an error for next iteration', function() {
             expect(iterator.next.bind(iterator)).to.throw(Error);
         });
     });
     describe('Has Next', function() {
         var set = new Set("a", "b");
         var iterator = new Iterator(set);
         it('should return true for first iteration', function() {
             expect(iterator.hasNext()).to.be.true();
         });
         it('should return true for second iteration', function() {
             expect(iterator.hasNext()).to.be.true();
         });
         it('should throw error for next iteration', function() {
             expect(iterator.hasNext.bind(iterator)).to.throw(Error);
         });
     });
     describe('Remove', function() {
         var setOne = new Set("a", "b", "c");
         var iteratorOne = new Iterator(setOne);
         var setTwo = new Collection("a", "b", "c");
         var iteratorTwo = new Iterator(setTwo);

         it('should remove "a" from the collection', function() {
             var next = iteratorOne.next();
             expect(iteratorOne.remove()).to.be.undefined;
         });
         it('should contain only two elements', function() {
             expect(setOne.size()).to.be.equal(2);
         });
         it('should contain only "b" and "c"', function() {
             expect(setOne.getAll()).to.be.eql(["b", "c"]);
         });
         it('should throw an error when next is not called', function() {
             expect(iteratorTwo.remove.bind(iteratorTwo)).to.throw(Error);
         });
     });
 })
