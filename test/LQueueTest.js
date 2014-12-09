/**
 * LQueue tests.
 *
 * @author Vivan
 */

 var chai = require('chai')
 , expect = chai.expect
 , assert = chai.assert
 , should = chai.should();

 var Collection = require('../lib/Collection.js');
 var LQueue = require('../lib/LQueue.js');

 describe('LQueue', function() {
     describe('Element', function() {
         var q = new LQueue();
         q.add("x");
         q.add("y");
         q.addAll("a", "b")
         console.log(q.getAll());
         it('should return the head of the queue', function() {
             var head = q.element();
             expect(head).to.be.equal("b");
         });
         it('should throw an error if queue is empty', function() {
             q.clear();
             expect(q.element.bind()).to.throw(Error);
         });
     });

     describe('Remove', function() {
         var q = new LQueue();
         q.add("z");
         q.add("x");
         q.add("c");
         it('should remove the first element and return it', function() {
             var r = q.remove();
             expect(r).to.be.equal("c");
         });
         it('should have 2 elements ["x", "z"]', function() {
             expect(q.getAll()).to.be.eql(["x", "z"]);
         });
         it('should throw an exception if the queue is empty', function() {
             q.clear();
             expect(q.remove.bind()).to.throw(Error);
         });
     });

     describe('Poll', function() {
         var q = new LQueue();
         q.addAll(["r", "s"], "t");
         it('should remove the first element and return it', function() {
             var r = q.remove();
             expect(r).to.be.equal("t");
         });
         it('should have 1 element ["r", "s"]', function() {
             expect(q.getAll()).to.be.eql([["r", "s"]]);
         });
         it('should return null if the queue is empty', function() {
             q.clear();
             expect(q.poll()).to.be.null();
         });
     });

     describe('Peek', function() {
         var q = new LQueue("x", "y", "a", "b");
         it('should return the head of the queue', function() {
             var head = q.peek();
             expect(head).to.be.equal("b");
         });
         it('should return null if queue is empty', function() {
             q.clear();
             expect(q.peek()).to.be.null();
         });
     });
 });
