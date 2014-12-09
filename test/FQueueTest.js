/**
 * FQueue tests.
 *
 * @author Vivan
 */

 var chai = require('chai')
 , expect = chai.expect
 , assert = chai.assert
 , should = chai.should();

 var Collection = require('../lib/Collection.js');
 var FQueue = require('../lib/FQueue.js');

 describe('FQueue', function() {
     describe('Element', function() {
         var q = new FQueue();
         q.add("x");
         q.add("y");
         q.addAll("a", "b")
         it('should return the head of the queue', function() {
             var head = q.element();
             expect(head).to.be.equal("x");
         });
         it('should throw an error if queue is empty', function() {
             q.clear();
             expect(q.element.bind()).to.throw(Error);
         });
     });

     describe('Remove', function() {
         var q = new FQueue();
         q.add("z");
         q.add("x");
         q.add("c");
         it('should remove the first element and return it', function() {
             var r = q.remove();
             expect(r).to.be.equal("z");
         });
         it('should have 2 elements ["x", "c"]', function() {
             expect(q.getAll()).to.be.eql(["x", "c"]);
         });
         it('should throw an exception if the queue is empty', function() {
             q.clear();
             expect(q.remove.bind()).to.throw(Error);
         });
     });

     describe('Poll', function() {
         var q = new FQueue();
         q.addAll(["r", "s"], "t");
         it('should remove the first element and return it', function() {
             var r = q.remove();
             expect(r).to.be.eql(["r", "s"]);
         });
         it('should have 1 element ["t"]', function() {
             expect(q.getAll()).to.be.eql(["t"]);
         });
         it('should return null if the queue is empty', function() {
             q.clear();
             expect(q.poll()).to.be.null();
         });
     });

     describe('Peek', function() {
         var q = new FQueue("x", "y", "a", "b");
         it('should return the head of the queue', function() {
             var head = q.peek();
             expect(head).to.be.equal("x");
         });
         it('should return null if queue is empty', function() {
             q.clear();
             expect(q.peek()).to.be.null();
         });
     });
 });
