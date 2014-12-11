
var ds = require('./index.js');

var Set = ds.Set
, SortedSet = ds.SortedSet
, Stack = ds.Stack
, Queue = ds.Queue
, Iterator = ds.Iterator;

var set = new Set("a", "b", new Set("r", "s"));
console.log(set.getAll());
