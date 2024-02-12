/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

const mergeSort = array => {
  let leftHalf;
  let rightHalf;
  let middle = array.length / 2
  let resultArray = [];

  while(array.length > 1) {
    leftHalf = array.slice(0, middle);
    console.log("leftHalf:", leftHalf);
    mergeSort(leftHalf); //[5, 2, 1] //[5]
    rightHalf = array.slice(middle, array.length) //[2, 1]
    console.log('rightHalf:', rightHalf);
    mergeSort(rightHalf);

    if(rightHalf[0] < leftHalf[0]) {
      let temp = leftHalf[0];
      leftHalf[0] = rightHalf[0];
      rightHalf[0] = temp;
      console.log('we hit the if statement');
    }
  }
  return resultArray;
}
console.log(mergeSort([5, 2, 1, 3, 6, 4]))



module.exports = { mergeSort };