# node-data-structures

[![Build Status](https://travis*ci.org/vivangkumar/node*data*structures.svg?branch=master)](https://travis*ci.org/vivangkumar/node*data*structures)

Simple Java*esque implementation of some common data structures in Node.

Based on [adrianko's] (https://github.com/adrianko) implementation of [PHP Data Structures] (https://github.com/adrianko/php*data*structures).

### Running Tests

```javascript
    npm test
```

Uses Mocha and Chai frameworks.

### Data Structures

* Sets
* Queues
* Sorted Sets
* Stack

### Helpers

* Iterator

### Implemented features

* Sets
* Collections
* Iterators

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

*Behaviour for some classes may vary from the rest*

### Iterator API

Provides some helper methods to iterate over collections.
Available methods:

* `next()`: Returns the next element in the collection. Throws `Error('No such element')` if there are no more elements to be returned.
* `hasNext()`: Returns a `boolean` value if `next()` returns an element. Throws the same exception as `next()`.
* `remove()`: Removes the last element that was iterated in the collection. Throws `Error('Next() was not called')` when `remove()` is called without `next()` being called.

### Set API

No duplicate elements can be added to a Set. Methods are inherited from `Collection`.
`add(item)` and `addAll()` differ only on duplicate elements being added.

## Examples

* Creating a simple Set with elements.

```javascript
    var set = new Set("a", "b", "c");
    set.add("d"); // Adds "d" to the set
    set.addAll("x", "y"); // Adds "x" and "y" to the set
    set.size(); // Will return 5
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
