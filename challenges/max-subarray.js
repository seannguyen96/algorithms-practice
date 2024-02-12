/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/


// Step-by-Step Process of Kadane's Algorithm
// Here's a step-by-step breakdown of how Kadane's Algorithm works:

//  Initialize two variables, max_so_far and max_ending_here, to 0.
//  Iterate through the array from left to right, examining each element one by one.
//  For each element, update max_ending_here as the maximum value is either the current 
//  element or the sum of the current element and max_ending_here.
//  Update max_so_far as the maximum of either the current max_so_far or max_ending_here.
//  Repeat steps 3 and 4 for all elements in the array.
//  The value of max_so_far at the end of the iteration will be the maximum subarray sum.
const maxSubarray = (arr) => {
  let max_so_far = -Infinity;
  let max_ending_here = 0;  
  for(let i = 0; i < arr.length; i++) {
    let element = arr[i];
    max_ending_here = Math.max(element, max_ending_here+element)
    max_so_far = Math.max(max_so_far, max_ending_here);
  }
  return max_so_far
}

const input = [1, -2, 3, 10, -4, 7, 2, -5];
const input2 = [15, 20, -5, 10]
console.log(maxSubarray(input))
console.log(maxSubarray(input2))
/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {
  let max_so_far = -Infinity;
  let max_ending_here = 0;  
  for(let i = 0; i < arr.length; i++) {
    let element = arr[i];
    max_ending_here = Math.max(element, max_ending_here+element)
    max_so_far = Math.max(max_so_far, max_ending_here);
  }
  return max_so_far
}

module.exports = { maxSubarray, kadanesMaxSubarray };
