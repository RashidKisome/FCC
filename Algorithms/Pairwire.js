/*  
https://www.youtube.com/watch?v=ib88K0j7yjI&ab_channel=JustinKim

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. 
Once an element has been used it cannot be reused to pair with another element.
 For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.
For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

*/

// 1) We cant use indices more than once
// 2) if an index can add with more than one, the use the smaller i

function pairwise(arr, arg) {
  // usedDict keeps track of which one has been used or not, this could be emptyfor optimization
  const usedDict = arr.reduce(
    (acc, _, i) => ({
      ...acc,
      [i]: false,
    }),
    {}
  );
  let output = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (usedDict[i] === true) {
      continue;
    }
    const iVal = arr[i]; // extract value (optional)
    for (let j = i + 1; j < arr.length; j++) {
      if (usedDict[j] === true) {
        continue;
      }
      const jVal = arr[j];

      // after this if statement, we add to the output
      if (iVal + jVal === arg) {
        usedDict[i] = true;
        usedDict[j] = true;
        output += i + j;
        break;
      }
    }
  }

  return output;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));

// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
