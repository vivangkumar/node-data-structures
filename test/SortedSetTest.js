/**
 * Sorted Set tests.
 *
 * @author Vivan
 **/

 var chai = require('chai')
 , expect = chai.expect
 , assert = chai.assert
 , should = chai.should();

 var SortedSet = require('../lib/SortedSet.js');
 var Set = require('../lib/Set.js');
 var Collection = require('../lib/Collection.js');

 describe('Sorted Set', function() {
     describe('Add', function() {
        var set = new SortedSet("z", "c", "a");
        var setTwo = new Set("x", "y");
        it('should add a new set', function() {
            expect(set.add(setTwo)).to.be.true();
        });
        it('should have length 4', function() {
            expect(set.size()).to.be.equal(4);
        });
        it('should be sorted as ["a", "c", ["x", "y"], "z"]', function() {
            expect(set.getAll()).to.be.eql(["a", "c", ["x", "y"], "z"]);
        });
     });

     describe('Add all', function() {
         var set = new SortedSet();
         var add = set.addAll("a", "x", "c", new Set("r", "s"));
         it('should add all elements', function() {
             expect(add).to.be.true();
         });
         it('should have a length of 4', function() {
             expect(set.size()).to.be.equal(4);
         });
         it('should be sorted as ["a", "c", ["r", "s"], "x"]', function() {
             expect(set.getAll()).to.be.eql(["a", "c", ["r", "s"], "x"]);
         });
         it('should return false if a duplicate is added', function() {
             expect(set.addAll("x", "a")).to.be.false();
         });
         it('should still have length of 4', function() {
             expect(set.getAll()).to.have.length(4);
         });
         it('should be sorted on adding another element', function() {
             expect(set.add("b")).to.be.true();
             expect(set.getAll()).to.eql(["a", "b", "c", ["r", "s"], "x"])
         });
     });

     describe('GetAll', function() {
         var set = new SortedSet("b", "a", ["z", "x"]);
         it('should getAll all elements of a set', function() {
             expect(set.getAll()).to.eql(["a", "b", ["x", "z"]]);
         });
         it('should have 3 elements', function() {
             expect(set.getAll()).to.have.length(3);
         });
     });

     describe('Size', function() {
         var set = new SortedSet("c", "b", "a");
         it('should return a size of 3', function() {
             set.size().should.equal(3);
         });
     });

     describe('Clear', function() {
         var set = new SortedSet("x", "y", "z");
         it('should not have any elements', function() {
             set.clear();
             expect(set.getAll()).to.be.empty;
         });
     });

     describe('Contains', function() {
         var set = new SortedSet("x", "y", "z");
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
         var set = new SortedSet("x", "y", "z");
         var anotherSet = new SortedSet("x", "y");
         it('should contain "x" and "y"', function() {
             var exists = set.containsAll("x", "y");
             assert.isTrue(exists);
         });
         it('should return true if argument is a sub set', function() {
             assert.isTrue(anotherSet instanceof Collection);
             set.add(anotherSet);

             var exists = set.containsAll(anotherSet);
             assert.isTrue(exists);
         });
         it('should return false if an element is not present', function() {
             var exists = set.containsAll("x", "a");
             assert.isFalse(exists);
         });
     });

     describe('Empty', function() {
         var set = new SortedSet("y", "x", "z");
         var emptySet = new SortedSet();
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
         var set = new SortedSet("x", "y", "z");
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
         });
     });

     describe('Remove all', function() {
         var set = new SortedSet("x", "y", "z");
         var anotherSet = new Set("x", "y");
         it('should return true if all elements have been removed', function() {
             var removed = set.removeAll("x", "y");
             assert.isTrue(removed);
         });
         it('should return true if subset has been removed', function() {
             var setTwo = new Set("x", "y", "z");
             setTwo.add(anotherSet);
             var removed = setTwo.removeAll(anotherSet);
             assert.isTrue(removed);
             expect(setTwo.getAll()).to.have.length(3);
             expect(setTwo.getAll()).to.eql(["x" ,"y", "z"]);
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
         var set = new SortedSet("x", "y", "z");
         it('should keep "x", but discard "y" and "z"', function() {
             var keep = set.keep("x");
             assert.isTrue(keep);
         });
         it('should keep a subset', function() {
             var setTwo = new SortedSet("a", "b", "c");
             var anotherSet = new SortedSet("b", "c");
             setTwo.add(anotherSet);
             var keep = setTwo.keep(anotherSet);

             assert.isTrue(keep);
             expect(setTwo.getAll()).to.have.length(1);
             expect(setTwo.getAll()).to.be.eql([["b", "c"]]);
         });
         it('should have length 1', function() {
             expect(set.getAll()).to.have.length(1);
         });
         it('should be equal to ["x"]', function() {
             expect(set.getAll()).to.be.eql(["x"]);
         })
     });

     describe('Equals', function() {
         var set = new SortedSet("a", "b");
         var setOne = new SortedSet("x", set);
         var setTwo = new SortedSet("x", set);
         var setThree = new SortedSet("a", "b");
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

     describe('First', function() {
         var set = new SortedSet("z", "x", "a");
         var first = set.first();
         it('should return the first element', function() {
            expect(first).to.be.eql("a");
         });
     });

     describe('Last', function() {
         var set = new SortedSet("z", "x", "a");
         var last = set.last();
         it('should return the last element', function() {
             expect(last).to.be.eql("z");
         });
     });

     describe('HeadSet', function() {
         var set = new SortedSet("z", "x", "c", "v", "b");
         var headSet = set.headSet("z");
         it('should have a length of 4', function() {
             expect(headSet.size()).to.be.equal(4);
         });
         it('should have 4 elements ["b", "c", "v", "x"]', function() {
             expect(headSet.getAll()).to.be.eql(["b", "c", "v", "x"]);
         });
         it('should throw an error if element does not exist', function() {
             expect(set.headSet.bind("e")).to.throw(Error);
         });
     });

     describe('TailSet', function() {
         var set = new SortedSet("z", "x", "c", "v", "b");
         var headSet = set.tailSet("c");
         it('should have a length of 4', function() {
             expect(headSet.size()).to.be.equal(4);
         });
         it('should have 4 elements ["c", "v", "x", "z"]', function() {
             expect(headSet.getAll()).to.be.eql(["c", "v", "x", "z"]);
         });
         it('should throw an error if element does not exist', function() {
             expect(set.headSet.bind("e")).to.throw(Error);
         });
     });

     describe('SubSet', function() {
         var set = new SortedSet("z", "x", "c", "v", "b");
         var headSet = set.subSet("v", "z");
         it('should have a length of 2', function() {
             expect(headSet.size()).to.be.equal(2);
         });
         it('should have 4 elements ["v", "x"]', function() {
             expect(headSet.getAll()).to.be.eql(["v", "x"]);
         });
         it('should throw an error if element does not exist', function() {
             expect(set.headSet.bind("e")).to.throw(Error);
         });
     });
 });
