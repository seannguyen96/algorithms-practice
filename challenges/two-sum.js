/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/


const twoSum = (arr, target) => { 
  let answer = false;
  let magicNum;
  let set = new Set(arr);
  for(let i = 0; i < arr.length; i++){
    if(magicNum !== arr[i]) {
      magicNum = target - arr[i];
      if(set.has(magicNum)) {
        answer = true; 
        return answer;
      }
    }
  }
  return answer;
}
const nums = [2, 5, 11, 15];
console.log(twoSum(nums, 7));

const nums2 = [1, 4, 6, 12, 9];
console.log(twoSum(nums2, 2));
/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => { 
  let answer = false;
  let magicNum = 1.337;
  let set = new Set(arr);
  //iterate through array for first and second value
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j<arr.length; j++) {
      if(j !== i) magicNum = target - arr[i] - arr[j];
      console.log(magicNum);
      if(set.has(magicNum)) {
        answer = true; 
        return answer;
      }
    }
  }
  return answer;
}
const nums3 = [2, 4, 1, 11, 15];
const nums4 = [2, 4, 1, 11, 15];
console.log(threeSum(nums3, 7));
console.log(threeSum(nums4, 20));

module.exports = { twoSum, threeSum };