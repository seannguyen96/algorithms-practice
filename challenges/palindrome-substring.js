//Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// input: a string
// output: # of substrings w a palindrome

const palindromeCount = (str) => {
  if(str.length === 1) return 1//  if string length === 1 return 1
  let count = 0;
  console.log(str.length)
  //  expand around the center helper function
  function compare(left, right) {
    while(left >= 0 && right < str.length && str[left] === str[right]) {
      count++;
      left--;
      right++;
    }
  };

  for(i = 0; i < str.length; i++) {
    compare(i, i); //odd
    compare(i, i + 1); //even
  }
  
  //return count
  return count;
}

console.log(palindromeCount('aa')); // 3 
console.log(palindromeCount('cat')); // 3 //a //t //c
console.log(palindromeCount('aaa')); // 6
console.log(palindromeCount('racecar')); // 6
console.log(palindromeCount('penut')); // 6
