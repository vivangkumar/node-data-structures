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

 describe('Iterator', function() {
     describe('Next', function() {
         var collection = new Collection("a", "b");
         var iterator = new Iterator(collection);
         it('should return "a" in the first iteration', function() {
             expect(iterator.next()).to.be.equal("a");
         });
         it('should return "b" in the first iteration', function() {
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
 });
