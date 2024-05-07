// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//  possibly a binary search algo 
//  two pointers, one for low and one for high
function searchMatrix(matrix, target) {
  let rows = matrix.length; //  num of rows in matrix
  let rowLength = matrix[0].length; //  number of columns in first row of matrix
  let low = 0, high = rows * rowLength - 1;

  while(low <= high) {
    let middle = Math.floor((low + high) / 2);
    let row = Math.floor(middle / rowLength);
    let column = middle % rowLength;
    let middleVal = matrix[row][column];
    console.log(middleVal)
    if(middleVal === target) {
      return true;
    } else if (middleVal < target) { //get right half of matrix
        low = middle + 1
    } else { //mid val is greater than so we get the left half
        high = middle - 1
    }
  }
  return false;
};


const matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]; 
const target1 = 13; 
const target2 = 3;
console.log(searchMatrix(matrix1, target1))
console.log(searchMatrix(matrix1, target2))