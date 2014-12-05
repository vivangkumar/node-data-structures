/**
 * Set tests.
 *
 * @author Vivan
 **/

 var chai = require('chai')
 , expect = chai.expect
 , assert = chai.assert
 , should = chai.should();

 var Set = require('../lib/Set.js');

 describe('Set', function() {
     describe('Add', function() {
         var set = new Set("z", "x");
         var setOne = new Set("a", "b");
         var setTwo = new Set("x", "y", setOne);
         it('should add a new element to the set', function() {
             expect(set.add("c")).to.be.true();
         });
         it('should add a new set to the set', function() {
             expect(setTwo.getAll()).to.eql(["x", "y", ["a" ,"b"]]);
         });
         it('should have length 3', function() {
             expect(set.size()).to.be.equal(3);
         });
         it('should not accept a duplicate element', function() {
             expect(set.add("c")).to.be.false();
         });
         it('should still contain three elements', function() {
             expect(set.getAll()).to.eql(["z",  "x", "c"]);
         });
         it('should add another set to a set', function() {
             var firstSet = new Set("a", "b");
             var secondSet = new Set("z");
             expect(firstSet.add(secondSet)).to.be.true();
             expect(firstSet.getAll()).to.be.eql(["a" ,"b", ["z"]]);
         })
     });

     describe('Add all', function() {
         var set = new Set();
         var anotherSet = new Set("a", "b");

         it('should add all elements to the Set', function() {
             assert.isTrue(set.addAll("x", "y", ["a", "b"]));
         });
         it('should add all elements in another set', function() {
             assert.isTrue(anotherSet instanceof Set);
             assert.isTrue(set.addAll(anotherSet));
         });
         it('should have length of 5', function() {
             expect(set.getAll()).to.have.length(5);
         });
         it('should have 3 elements "x", "y", ["a", "b"]', function() {
             expect(set.getAll()).to.eql(["x", "y", ["a", "b"], "a", "b"]);
         });
         it('should return false if a duplicate is added', function() {
             expect(set.addAll("x", "y")).to.be.false();
         });
         it('should still have length of 5', function() {
             expect(set.getAll()).to.have.length(5);
         });
     });

     describe('GetAll', function() {
         var set = new Set("a", "b", ["z", "x"]);
         it('should getAll all elements of a set', function() {
             expect(set.getAll()).to.eql(["a", "b", ["z", "x"]]);
         });
         it('should have 3 elements', function() {
             expect(set.getAll()).to.have.length(3);
         });
     });

     describe('Size', function() {
         var set = new Set("a", "b", "c");
         it('should return a size of 3', function() {
             set.size().should.equal(3);
         })
     });

     describe('Clear', function() {
         var set = new Set("x", "y", "z");
         it('should not have any elements', function() {
             set.clear();
             expect(set.getAll()).to.be.empty;
         })
     });

     describe('Contains', function() {
         var set = new Set("x", "y", "z");
         it('should contain "x"', function() {
             var exists = set.contains("x");
             assert.isTrue(exists);
         });
         it('should return false if element is not present', function() {
             var exists = set.contains("a");
             assert.isFalse(exists);
         });
     });

     describe('Contains all', function() {
         var set = new Set("x", "y", "z");
         var anotherSet = new Set("x", "y");
         it('should contain "x" and "y"', function() {
             var exists = set.containsAll("x", "y");
             assert.isTrue(exists);
         });
         it('should return true if argument is a sub set', function() {
             assert.isTrue(anotherSet instanceof Set);
             var exists = set.containsAll(anotherSet);
             assert.isTrue(exists);
         });
         it('should return false if an element is not present', function() {
             var exists = set.containsAll("x", "a");
             assert.isFalse(exists);
         });
     });

     describe('Empty', function() {
         var set = new Set("x", "y", "z");
         var emptySet = new Set();
         it('should be false if elements are present', function() {
             var empty = set.isEmpty();
             assert.isFalse(empty);
         });
         it('should be true if no elements are present', function() {
             var empty = emptySet.isEmpty();
             assert.isTrue(empty);
         });
     });

     describe('Remove', function() {
         var set = new Set("x", "y", "z");
         it('should return true if element is removed', function() {
             var removed = set.remove("x");
             assert.isTrue(removed);
         });
         it('should have length 2', function() {
             expect(set.getAll()).to.have.length(2);
         });
         it('should return false if element cannot be removed', function() {
             var removed = set.remove("a");
             assert.isFalse(removed);
         });
         it('should be equal to ["y", "z"]', function() {
             expect(set.getAll()).to.eql(["y", "z"]);
         })
     });

     describe('Remove all', function() {
         var set = new Set("x", "y", "z");
         var anotherSet = new Set("x", "y");
         it('should return true if all elements have been removed', function() {
             var removed = set.removeAll("x", "y");
             assert.isTrue(removed);
         });
         it('should return true if subset has been removed', function() {
             var setTwo = new Set("x", "y", "z");
             var removed = setTwo.removeAll(anotherSet);
             assert.isTrue(removed);
             expect(setTwo.getAll()).to.have.length(1);
             expect(setTwo.getAll()).to.eql(["z"]);
         });
         it('should return false if all elements cant be removed', function() {
             var removed = set.removeAll("a", "b");
             assert.isFalse(removed);
         });
         it('should be equal to ["z"]', function() {
             expect(set.getAll()).to.eql(["z"]);
         });
         it('should have length 1', function() {
             expect(set.getAll()).to.have.length(1);
         });
     });

     describe('Keep', function() {
         var set = new Set("x", "y", "z");
         it('should keep "x", but discard "y" and "z"', function() {
             var keep = set.keep("x");
             assert.isTrue(keep);
         });
         it('should keep a subset', function() {
             var setTwo = new Set("a", "b", "c");
             var anotherSet = new Set("b", "c");
             var keep = setTwo.keep(anotherSet);

             assert.isTrue(keep);
             expect(setTwo.getAll()).to.have.length(2);
             expect(setTwo.getAll()).to.be.eql(["b", "c"]);
         });
         it('should have length 1', function() {
             expect(set.getAll()).to.have.length(1);
         });
         it('should be equal to ["x"]', function() {
             expect(set.getAll()).to.be.eql(["x"]);
         })
     });

     describe('Equals', function() {
         var set = new Set("a", "b");
         var setOne = new Set("x", set);
         var setTwo = new Set("x", set);
         var setThree = new Set("a", "b");
         var falseSet = ["x", "y", "z"];

         it('should return true for setOne and setTwo', function() {
             var equals = setOne.equals(setTwo);
             assert.isTrue(equals);
         });
         it('should return false for setOne and setTwo', function() {
             var equals = setOne.equals(setThree);
             assert.isFalse(equals);
         });
         it('should return false if an not instance of Collection', function() {
             var equals = setOne.equals(falseSet);
             assert.isFalse(equals);
         });
     });
 });
