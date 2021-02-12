/*   

1.Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
2.Update the current existing inventory item quantities (in arr1). 
3.If an item cannot be found, add the new item and quantity into the inventory array. 
4.The returned inventory array should be in alphabetical order by item.

*/

function updateInventory(arr1, arr2) {
  const obj1 = arr1.reduce(
    // 2 parameters, the we destructure the elements in the array, amt & name
    (acc, [amt, name]) => ({
      ...acc,
      [name]: amt, // key = name, value = amts
    }),
    {}
  );
  const obj2 = arr2.reduce(
    (acc, [amt, name]) => ({
      ...acc,
      [name]: amt,
    }),
    {}
  );

  //  console.log("BEFORE", obj1);
  // loop over all the keys of obj2,
  for (const name in obj2) {
    if (name in obj1) {
      obj1[name] += obj2[name]; // if keyname exists in obj1, add to it
    } else {
      obj1[name] = obj2[name]; // if key doesnt exist
    }
  }

  // console.log("AFTER", obj1);
  // convert to 2 dimenional array
  const output = [];
  for (const name in obj1) {
    output.push([obj1[name], name]);
  }
  // sort the output
  return output.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]));
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
