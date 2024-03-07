// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} length
 * @return {number}
 */
const climbStairs = (length) => {
    //if length == 1, return 1, if l===2, return 2
    if(length === 1) return 1;
    if(length === 2) return 2;
    let options = new Array(length + 1);
    options[1] = 1;
    options[2] = 2;

    for(let step = 3; step <= length; step++) {
      options[step] = options[step - 1] + options[step - 2];
    }

    return options[length];
};

//now use closure!

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));


const calculateCacheStairs = (stairs) => {
  let steps = {0: 0,
              1: 1, 
              2: 2};
  let length = stairs;
  return (length) => {
    //Memoization
    if(!Object.hasOwn(steps, length)) {
          //base cases
      if(length <= 0) return 0;
      if(length === 1) return 1;
      if(length === 2) return 2;
      
      // steps[length] = steps[length - 1] + steps[length - 2];
      steps[length] = calculateCacheStairs()(length - 1) + calculateCacheStairs()(length - 2);
      return steps[length];
    } else {
      console.log(`cached value found at ${length}`);
      return steps[length];
    }
  } ; 
  
};

const cacheStairs = calculateCacheStairs();

console.log(cacheStairs(1));
console.log(cacheStairs(2));
console.log(cacheStairs(3));
console.log(cacheStairs(3));
console.log(cacheStairs(4));
console.log(cacheStairs(5));
console.log(cacheStairs(6));
console.log(cacheStairs(7));
console.log(cacheStairs(8));
console.log(cacheStairs(9));
