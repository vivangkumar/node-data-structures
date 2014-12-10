# node-data-structures

[![Build Status](https://travis-ci.org/vivangkumar/node-data-structures.svg?branch=master)](https://travis-ci.org/vivangkumar/node-data-structures)

Simple Java-esque implementation of some common data structures in Node.

Based on [adrianko's] (https://github.com/adrianko) implementation of [PHP Data Structures] (https://github.com/adrianko/php-data-structures).

## Installing and using the module

* Install using npm

`npm install node-data-structures`

* Require the module

```javascript
    var ds = require('node-data-structures');

    // Use the data structures you want
    var Set = ds.Set
      , SortedSet = ds.SortedSet
      , Stack = ds.Stack
      , Queue = ds.Queue
      , Iterator = ds.Iterator;
```

### Data Structures

* Sets
* Queues
* Sorted Sets
* Stack

### Helpers

* Iterator

### Implemented features

* Sets
* Sorted Sets
* Queues
* Stacks
* Collections
* Iterator

## Documentation

### Collection API

All structures inherit from the `Collection` class.
Available methods:

* `getAll()`: Returns all elements of the collection.
* `toJson()`: Returns the collection in JSON format.
* `size()`: Returns the size of the collection.
* `add(item)`: Add an element to the collection. Use this method to add a single element. Returns `true` if operation was successful; else returns `false`. Can also be used to add a single `Collection` to it.
* `addAll()`: Add all the elements in `arguments` to the collection. Returns a `boolean` similar to `add(item)`.
* `clear()`: Clears the collection.
* `contains(item)`: Returns `true` if `item` exists in the collection; else returns `false`.
* `containsAll()`: Similar to `contains(item)`; but checks for all elements in `arguments`.
* `isEmpty()`: Returns `true` if the collection is empty, else returns `false`.
* `remove(item)`: Removes `item` from the collection. Returns `boolean`.
* `removeAll()`: Removes all elements in `arguments`. Returns a `boolean` value.
* `equals(Collection)`: Compares one `Collection` to another. Returns `boolean` if each element is the same in each collection. Nested collections are further compared.


### Iterator API

Provides some helper methods to iterate over collections.
Available methods:

* `next()`: Returns the next element in the collection. Throws `Error('No such element')` if there are no more elements to be returned.
* `hasNext()`: Returns a `boolean` ; true if the next element exists, else returns false. It is advisable to use `hasNext()` before calling `next()`.
* `remove()`: Removes the last element that was iterated in the collection. Throws `Error('Next() was not called')` when `remove()` is called without `next()` being called.

### Set API

No duplicate elements can be added to a `Set`. Methods are inherited from `Collection`.
`add(item)` and `addAll()` differ only on duplicate elements being added.

### Sorted Set API

`SortedSet` inherits from `Set` and contains additional methods. Elements are sorted when added to a `SortedSet`.
Available methods:

* `first()` : Returns the first element of the collection.
* `last()`: Returns the last element of the collection.
* `headSet(end)`: Returns a `SortedSet` containing elements from the parent set strictly less than `end`.
* `tailSet(start)`: Returns a `SortedSet` containing elements inclusive of `start`.
* `subSet(start, end)`: Returns a `SortedSet` containing elements inclusive of `start` but not inclusive of `end` inheriting from the parent collection.

### Queue API
`Queue` inherits from `Collection`. All methods in `Collection` are available to `Queue`. Other methods available are:

* `element()`: Returns the first element in the Queue. Throws an `Error('No such element')` if the Queue is empty.
* `remove()`: Retrieves and removes the element at the head of the Queue. Throws an `Error('Queue is empty')` if Queue is empty.
* `poll()`: Removes and retrieves the element at the head of the Queue. Differs from `remove()` only in that it returns `null` if the Queue is empty.
* `peek()`: Retrieves the element at the head of the Queue. Differs from `element()` only in that it returns `null` if Queue is empty.

### Stack API
Available `Stack` methods:

* `push(item)`: Pushes an `item` onto the top of the Stack.
* `pop()`: Pop the top element off the Stack and return it. Trying to `pop()` on an empty Stack will throw `Error('Stack is empty.')`.
* `empty()`: This is synonymous to the `isEmpty()` function in the base class. Returns a `boolean` value.
* `search(item)`: Search for an item in the Stack. Will return an offset from the top of the stack. If `item` does not exist in the Stack, a `Error('No such element')` is thrown.

## Examples

* Creating a simple Set with elements.

```javascript
    var set = new Set("a", "b", "c");
    set.add("d"); // Adds "d" to the set
    set.addAll("x", "y"); // Adds "x" and "y" to the set
    set.size(); // Will return 6
```

* Creating an empty Set.

```javascript
    var set = new Set();
    set.addAll("a", "b", "c"); // Adds all elements to the set
```

* Create a Set by adding another Collection to it.

```javascript
    var setOne = new Set("a", "b");
    var setTwo = new Set("x", "y", setOne);
    var setThree = new Set(["r", "s"]);
    setTwo.add(setThree);
```

* Create a new Iterator

```javascript
    var set = new Set();
    var setOne = new Set("a", "b", ["x", "y"]);
    set.add(setOne);

    var iterator = new Iterator(set);
    while(iterator.hasNext()) {
        console.log(iterator.next());
    }
```

* Create a new SortedSet

```javascript
    var sortedSet = new SortedSet("z", "x", "c", "v");
    sortedSet.getAll(); // Will return ["c", "v", "x", "z"]
    var set = new Set(["r", "s", "t"], "k");
    sortedSet.add(set);

    sortedSet.first(); // Will return "c"
    sortedSet.tailSet("v"); // Will return ["v", "x", "z"]
```

* Create a new Queue

```javascript
    var q = new Queue("z", "x", "c");
    q.peek(); // Will return "z"
    q.poll(); // Will remove and return "z"
    q.getAll(); // Contains ["x", "c"]
```

* Create a new Stack

```javascript
    var stack = new Stack();
    stack.push("z");
    stack.push(["r", "s"]);
    console.log(stack.getAll()); // Will return [["r", "s"], "z"]

    stack.pop(); // Will remove ["r", "s"] off the Stack and return it.
    stack.search("z"); // Will return 1
```

## Running Tests

```javascript
    npm test
```
Test Frameworks:
* Mocha - Test suite runner.
* Chai - Assert, Expect and Should (BDD).

## Updates / Todo

* Possibly make data structures synchronised.
* Make `SortedSets` backed by parent sets.
