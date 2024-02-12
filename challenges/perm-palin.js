/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {
  let cache = {};
  let oddCount = 0;
 
  if(typeof str !== "string") return false;
  if(str.length <= 0) return true;
  if(str.length === 1) return true;

  //if cached, increment cached value. otherwise create cache
  for(let char of str) {
    if (Object.hasOwn(cache, char)) {
      cache[char]++;
      // console.log('updated cache result: ', cache[char]);
    } else
    cache[char] = 1;
    // console.log('new cache entry: ', cache[char]);
  }
  //  get odd char count
  let objValArr = Object.values(cache);
  for(let value of objValArr){
    if(value % 2 !== 0) oddCount++;
  }
  if(oddCount > 1) return false;
  else if(str.length % 2 === 1 && oddCount <= 1) return true;
  else if(str.length % 2 === 0 && oddCount === 0) return true;
  else return false;
};

console.log(permPalin('cat'));
console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };