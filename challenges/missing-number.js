// Given an array nums containing n integers in the range [0, n] without any duplicates, 
// return the single number in the range that is missing from nums.

// Follow-up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// Example 1: 
// Input: nums = [1,2,3]
// Output: 0

// Explanation: Since there are 3 numbers, the range is [0,3]. 
// The missing number is 0 since it does not appear in nums.

// Example 2:
// Input: nums = [0,2]
// Output: 1


class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  missingNumber(nums) {
    let set = new Set(nums);
    let n = nums.length;
    let counter = 0;
    console.log(n);
    console.log(set);
    
    while(counter < n){
      if(!set.has(counter)) {
        return counter
      } counter++
    }
  }
}

let test = new Solution();
console.log(test.missingNumber([1,2,3]))
console.log(test.missingNumber([0,2]))