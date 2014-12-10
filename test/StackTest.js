/**
 * Stack tests.
 *
 * @author Vivan
 */

 var chai = require('chai')
   , expect = chai.expect
   , assert = chai.assert
   , should = chai.should();

 var Stack = require('../index.js').Stack;

 describe('Stack', function() {
     describe('Push', function() {
         var q = new Stack();
         it('should add a new element to the top of the Stack', function() {
             var add = q.push("a");
             expect(add).to.be.true();
         });
         it('should have length 3', function() {
             q.add("b");
             q.add("c");
             expect(q.size()).to.be.equal(3);
         });
         it('should contain 3 elements ["c", "b", "a"]', function() {
             expect(q.getAll()).to.be.eql(["c", "b", "a"]);
         });
     });

     describe('Pop', function() {
         var q = new Stack("z", "x", "c");
         it('should pop the first element and return it', function() {
             var r = q.pop();
             expect(r).to.be.equal("c");
         });
         it('should have 2 elements ["x", "z"]', function() {
             expect(q.getAll()).to.be.eql(["x", "z"]);
         });
         it('should throw an exception if the Stack is empty', function() {
             q.clear();
             expect(q.pop.bind()).to.throw(Error);
         });
     });

     describe('empty', function() {
         var q = new Stack();
         it('should return true is Stack is empty', function() {
             expect(q.empty()).to.be.true();
         });
         it('should have 1 element ["t"]', function() {
             q.push("z");
             expect(q.empty()).to.be.false();
         });
     });

     describe('Search', function() {
         var q = new Stack("x", "y", "a", "b");
         it('should return the index where the element occurs in the Stack', function() {
             var index = q.search("x");
             expect(index).to.be.equal(4);
         });
         it('should throw an error if the element does not exist', function() {
             expect(q.search.bind("r")).to.throw(Error);
         });
     });
 });
