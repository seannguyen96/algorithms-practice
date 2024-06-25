// Single Number

// You are given a non-empty array of integers nums. Every integer appears twice except for one.
// Return the integer that appears only once.

// You must implement a solution with
// O(n) runtime complexity and use only 
// O(1) extra space.

// Example 1:
// Input: nums = [3,2,3]
// Output: 2

// Example 2:
// Input: nums = [7,6,6,7,8]
// Output: 8

// constraints:
// 1 <= nums.length <= 10000
// -10000 <= nums[i] <= 10000

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  singleNumber(nums) {
    let res = 0;
    for (const n of nums) {
      //same as bitwise XOR (res ^= n)
      res = n ^ res;
    }
    return res;
  }
}

let arr1 = [7,6,6,7,8];
let arr2 = [3,2,3];

let solution = new Solution();
console.log(solution.singleNumber(arr1));
console.log(solution.singleNumber(arr2));