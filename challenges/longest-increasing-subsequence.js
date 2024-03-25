// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1


  // inputs: array of vals
  // output: length (of longest segment)
const longestSub = (arr) => {
  //dynamic programming to store longest length of subsequence
  let newArr = Array(arr.length).fill(1);

  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){
      if(arr[i] > arr[j]){
        newArr[i] = Math.max(newArr[i], newArr[j] + 1)
      }
    }
  }
    
  return Math.max(...newArr);
}

console.log(longestSub([-5,0,1,2,3,4,5]));
// console.log(longestSub('treats')); 
console.log(longestSub([7,7,7,7,7,7,7]));
console.log(longestSub([7,6,5,7,3,7]));