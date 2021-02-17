// Justin Kim on Heaps Algorithm -> https://www.youtube.com/watch?v=xghJNlMibX4&t=0s&ab_channel=JustinKim

/*  

Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

// The Heaps Algorithm - https://en.wikipedia.org/wiki/Heap%27s_algorithm

// Heaps algorithm
/* This function accepts an array and gives you an output and array of arrays that gives you all the different permutations */
// The output of this whole function will be an array of arrays
const getPermutations = (arr) => {
  const output = [];
  // swapInPlace will swap the array that we pass it for the IndexA & indexB
  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };
  //recursive, n = length of array, heapArr = arr
  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice()); // new copy of the array
      return;
    }

    generate(n - 1, heapArr); // call it recursively

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1); // swap i & n -1
      } else {
        swapInPlace(heapArr, 0, n - 1); // swap again
      }

      generate(n - 1, heapArr); // call it again
    }
  };

  generate(arr.length, arr.slice());

  return output;
};

function permAlone(str) {
  const arr = [...str]; // const arr =  str.split('')  split the string into an array
  const perms = getPermutations(arr);

  // We are going to loop over each element and compare it to the next one and make sure they are not the same
  let count = 0;
  for (const perm of perms) {
    let hasRepeats = false;
    for (let i = 0; i < perm.length - 1; i++) {
      if (perm[i] === perm[i + 1]) {
        // if current element is the same as the next one " comparison"
        hasRepeats = true; // as long as there is one repeat then the loop will stop
        break;
      }
    }
    if (!hasRepeats) {
      count++;
    }
  }

  return count;
}

// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.

console.log(hasRepeats("aab"));

permAlone("abb");

// Heaps algorithm
/* This function accepts an array and gives you an output and array of arrays that gives you all the different permutations */
// The output of this whole function will be an array of arrays
const getPermutations = (arr) => {
  const output = [];
  // swapInPlace will swap the array that we pass it for the IndexA & indexB
  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };
  //recursive, n = length of array, heapArr = arr
  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice()); // new copy of the array
      return;
    }

    generate(n - 1, heapArr); // call it recursively

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1); // swap i & n -1
      } else {
        swapInPlace(heapArr, 0, n - 1); // swap again
      }

      generate(n - 1, heapArr); // call it again
    }
  };

  generate(arr.length, arr.slice());

  return output;
};
