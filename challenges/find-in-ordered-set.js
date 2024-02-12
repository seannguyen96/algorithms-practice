/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
  const orderedSet = new Set(array);
  if(orderedSet.has(target)) return true;
  return false;
};

const nums = [-3, 0, 8, 13, 37]
console.log(findInOrderedSet(nums, 0));  
console.log(findInOrderedSet(nums, 2));  

/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {
  const matrixLength = matrix.length; //3
  let matrixMiddle = Math.floor(matrix.length / 2); //1
  let currentMatrix = matrix[matrixMiddle]; //[6, 7, 8, 13, 37]
  const firstIndex = currentMatrix[0];
  const lastIndex = currentMatrix[currentMatrix.length - 1];
  console.log(lastIndex);

  console.log(currentMatrix)

  //check middle 
  const middleIndex = Math.floor(currentMatrix.length / 2) //2
  if(target === currentMatrix[middleIndex]) { //match
    return true;
  }
  if(target > currentMatrix[middleIndex]) { //target is greater than num
    //we want right half
    matrix = matrix.slice(currentMatrix[middleIndex], matrix[lastIndex]);
    console.log(matrix)
  }
  //check first

  //check last

};

const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];

console.log(findIn2dMatrix(matrix, 13));
console.log(findIn2dMatrix(matrix, 42)); 

module.exports = { findInOrderedSet, findIn2dMatrix };
