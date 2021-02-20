/*  
In the last section, we talked about what a stack is and how we can use an array to represent a stack. 
In this section, we will be creating our own stack class. 
Although you can use arrays to create stacks, sometimes it is best to limit the amount of control we have with our stacks. 
Apart from the push and pop method, stacks have other useful methods. 
Let's add a peek, isEmpty, and clear method to our stack class.

Write a push method that pushes an element to the top of the stack, 
a pop method that removes and returns the element on the top of the stack, 
a peek method that looks at the top element in the stack, an isEmpty method that checks if the stack is empty, 
and a clear method that removes all elements from the stack. Normally stacks don't have this, 
but we've added a print helper method that console logs the collection.

https://medium.com/better-programming/implementing-a-stack-in-javascript-73d1aa0483c1
Push → Add an element to the stack.
Pop → Delete an element from the stack.
Peek → Get the top element of the stack.
Length → Return the length of the stack.
Search → Search for the element in the stack.
IsEmpty → Check if the stack is empty.
Print → Print the elements of the stac

*/

class Stack {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  push(val) {
    return this.collection.push(val);
  }
  pop() {
    return this.collection.pop();
  }
  peek() {
    return this.collection[this.collection.length - 1];
  }
  isEmpty() {
    return this.collection.length === 0;
  }
  clear() {
    return (this.collection.length = 0);
  }
}

//Your Stack class should have a push method.
//Your Stack class should have a pop method.
//Your Stack class should have a peek method.
