/*  

Perform a Union on Two Sets
In this exercise we are going to perform a union on two sets of data. 
We will create a method on our Set data structure called union. 
This method should take another Set as an argument and return the union of the two sets, excluding any duplicate values.
For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].

*/
function Set() {
  var collection = [];

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (anotherSet) {
    const newSet = new Set();
    const addToSet = (el) => newSet.add(el);
    this.values().forEach(addToSet);
    anotherSet.values().forEach(addToSet);
    return newSet;
  };
}
