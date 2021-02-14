/*  

Here we will implement selection sort. 
Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. 
It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. 
It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted.
 Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.



*/ 

function selectionSort(array) {
  
  for(let i = 0; i < array.length - 1; i++){
    let minIndex = i;
    for(let j = i+ 1; j < array.length; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]] // swap, replacing the 3 lines of code below
    // const temp = array[i];
    // array[i] = array[minIndex];
    // array[minIndex] = temp;
  }
  
    return array;
    
  }
  
  
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);