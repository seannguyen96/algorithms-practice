/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  const parens = ['(', ')']
  let result = [];
  if (n===1) return ['()'];
  if (n===0) return [''];

  const generateParens = (presult, leftCount, rightCount) => {
    if(presult.length === n * 2) {
      result.push(presult);
      return;
    }
    if(leftCount < n) {
      generateParens(presult + '(', leftCount++, rightCount);
    }
    if(leftCount < rightCount) {
      generateParens(presult + ')', leftCount, rightCount++);
    }
  }
  generateParens('', 0, 0);
  return result;
};

console.log(generateParentheses(1)); //expect ['()'];
console.log(generateParentheses(2)); //expect ['(())', '()()'];

module.exports = {generateParentheses};
