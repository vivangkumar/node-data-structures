/**
 * Main package entry file.
 * Index.js
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var Set = require('./lib/Set.js');
 var SortedSet = require('./lib/SortedSet.js');
 var Queue = require('./lib/Queue.js');
 var Iterator = require('./lib/Iterator.js');
 var Stack = require('./lib/Stack.js');

 module.exports = {
     Set: Set,
     SortedSet: SortedSet,
     Queue: Queue,
     Stack: Stack,
     Iterator: Iterator
 };
