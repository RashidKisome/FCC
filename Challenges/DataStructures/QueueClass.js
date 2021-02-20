/*   

Like stacks, queues are a collection of elements. 
But unlike stacks, queues follow the FIFO (First-In First-Out) principle. 
Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.

We could use an array to represent a queue, but just like stacks, we want to limit the amount of control we have over our queues.
The two main methods of a queue class is the enqueue and the dequeue method. 
The enqueue method pushes an element to the tail of the queue, and the dequeue method removes and returns the element at the front of the queue. 
Other useful methods are the front, size, and isEmpty methods.

Write an enqueue method that pushes an element to the tail of the queue, 
a dequeue method that removes and returns the front element, 
a front method that lets us see the front element, a size method that shows the length, 
and an isEmpty method to check if the queue is empty.

*/

function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // This method adds the element to the queue.
  this.enqueue = function (val) {
    collection.push(val);
  };
  // This method removes the first element from the queue.
  this.dequeue = function () {
    return collection.shift();
  };
  //  This method returns the first element in the queue that’d be dequeue’d.
  this.front = function () {
    return collection[0];
  };
  // This method returns the size of the queue.
  this.size = function () {
    return collection.length;
  };
  // This method returns if the queue is empty.
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
