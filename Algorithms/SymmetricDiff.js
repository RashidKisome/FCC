/* 
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates)

*/

const symOfTwo = (arr1, arr2) => {
  const output = [];
  for (const el of arr1) {
    if (!output.includes(el) && !arr2.includes(el)) {
      output.push(el);
    }
  }

  for (const el of arr2) {
    if (!output.includes(el) && !arr1.includes(el)) {
      output.push(el);
    }
  }

  return output;
};

// console.log(symOfTwo([1, 2, 3], [5, 2, 1, 4]));

function sym() {
  const arrOfArrs = [...arguments];
  let output = arrOfArrs[0];
  for (let i = 1; i < arrOfArrs.length; i++) {
    output = symOfTwo(output, arrOfArrs[i]);
  }

  return output.sort((a, b) => a - b);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));

// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
