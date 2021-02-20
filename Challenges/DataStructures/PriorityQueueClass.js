/*   

In this challenge you will be creating a Priority Queue. 
A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. 
This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. 
If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.

For instance, let’s imagine we have a priority queue with three items:
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
Here the second value (an integer) represents item priority. If we enqueue ['human', 1] with a priority of 1 (assuming lower priorities are given precedence) it would then be the first item to be dequeued. The collection would look like this:
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]].
We’ve started writing a PriorityQueue in the code editor. You will need to add an enqueue method for adding items with a priority, a dequeue method for removing and returning items, a size method to return the number of items in the queue, a front method to return the element at the front of the queue, 
and finally an isEmpty method that will return true if the queue is empty or false if it is not.
The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. dequeue and front should return only the item's name, not its priority.

*/

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };

  /*  
        enqueue() - It enqueue’s the new node to it’s appropriate place in queue.
        dequeue() - It removes the first node from the queue.
        front() - This method returns the first node to be dequeued.
        size() - Returns the size of the queue.
        isEmpty() - Returns if the queue is empty.
  
  
  */
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // Only change code above this line
}

/*  
The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.
*/
