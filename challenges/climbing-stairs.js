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
      ways[step] = ways[step - 1] + ways[step - 2];
    }

    return ways[length];
};

//now use closure!