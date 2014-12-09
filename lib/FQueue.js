/**
 * FIFO Queue class.
 * Inherits from Queue.
 *
 * @author Vivan <vivangkumar>
 * @copyright Vivan, 2014.
 */

 var Queue = require('./Queue.js');

 /**
  * FQueue constructor.
  * Creates a new FIFO Queue.
  */
 function FQueue() {
     Queue.apply(this, arguments);
 }

 FQueue.prototype = new Queue();

 module.exports = FQueue;
