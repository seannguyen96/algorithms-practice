/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/

const selectionSort = array => {
  for(let i = 0; i < array.length - 1; i++){
    let min = i;
    for(let j = i+1; j < array.length; j++) {
      //check if arr[j] is lower than arr[min]
      if(array[j] < array[min]) {
        //temp var to save value. update the old min with the new min
        let temp = array[min];
        array[min] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

console.log(selectionSort([9, 10, 3, 5, 11, 6]))

/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

const insertionSort = array => {
  //first value okay
  let i, j, current;
  for(i = 1; i < array.length; i++) {
    current = array[i];
    j = i - 1;
    
    while ( j >= 0 && array[j] > current){
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j+1] = current;
  }
  return array
};

module.exports = {selectionSort, insertionSort};
