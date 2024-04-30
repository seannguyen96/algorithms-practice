// Given an array, recursively splitting the array by a pivot, that is,
// – all values less than the pivot value are moved to the left of pivot
// – all values greater than the pivot are moved to the right of pivot
// – until the array to be split has less than 2 elements
// The left and right subarray are not sorted.
// The elements rearrange is done in place, that is, there is no need to create new array.

//  2. call the helper funciton. after returning pivot index, use recursion to call helper 
//  on the left and right subarray
function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex =  pivot(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

//  1. Helper function for returning pivot index
function pivot (arr, start, end) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  
  //  pick the 1st element as pivot
  //  iterate through arr, 
  let pivot = arr[start];
  let pivotIndex = start;

  for(let i = start; i <= end; i++) {
    //  if arr[i] < pivot
    if(arr[i] < pivot) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, pivotIndex, start);
  return pivotIndex;
}


const arr = [100,99,-88,2,3,1,4,-3]; 
console.log(quickSort(arr));
console.log(arr);  // Expecting: [-88, -3, 1, 2, 3, 4, 99, 100]