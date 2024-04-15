// Given an integer array nums, find a 
// subarray that has the largest product, and return the product.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// input: array w 2+ values
// output: highest product from subarray

//keep track of highest product
//  iterate through each arr index and multiply current index 
//  if product is greater than currentMax, update current max value
//  return max product

//  Kadane's algo (adapted for products)
const maxProductSubArray = (arr) => {
  let maxProd = arr[0];
  let minProd = arr[0];
  let result = arr[0];

  for(let i = 1; i < arr.length; i++) {
    const num = arr[i];
    // console.log([maxProd, minProd]);
    if(num < 0) {
      [maxProd, minProd] = [minProd, maxProd];
      console.log([maxProd, minProd])
    }
    //  store max and min products ending at current position
    maxProd = Math.max(num, maxProd * num);
    minProd = Math.min(num, minProd * num);
    console.log([maxProd])
    console.log([minProd])

    result = Math.max(result, maxProd);
    console.log(result);
  }

  return result;
}

// console.log(maxProductSubArray([2,3,-2,4]))
// console.log(maxProductSubArray([2,3,-2,4, -1]))
console.log(maxProductSubArray([2,3,-2, -2, -1, 25]))
// console.log(maxProductSubArray([-2,0,-1]))
