/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

// const substringNonrepeating = str => {
//   let window = new Set([]);
//   let maxLength = 0;
//   let previousChar;
  //  iterate through each character of str
  //  add char to set if char not in set
  //  update maxLength if needed
  //  reset window to the previous char
  //  add char
  //  update str
  // while(str.length) {
  //   console.log(str[0])
  //   if(!window.has(str[0])) {
  //     window.add(str[0])
  //     previousChar = str[0];
  //     if (window.size > maxLength) maxLength = window.size;
  //   }else{
  //      window.clear();
  //      window.add(previousChar);
  //      window.add(str[0])
  //      str = str.slice(1, str.length);
  //      console.log(str);
  //   }
  //   return maxLength
  // };

  const substringNonrepeating = str => {
    let window = new Set([]);
    let maxLength = 0;
    let previousChar;

  for(let char of str) {      //  iterate through each character of str
      if(!window.has(char)) { //  update maxLength if needed
        window.add((char));   //  add char to set if char not in set
        previousChar = char;
        if (window.size > maxLength) maxLength = window.size;
      }
      //  reset window to the previous char
      //  add char
      else {                  //  reset window to the previous char
        window.clear();       //  add char
        window.add((previousChar));
        window.add(char);
      }
    }
  return maxLength;
};

console.log(substringNonrepeating("abcabcbb"));
console.log(substringNonrepeating("bbbbb"));
console.log(substringNonrepeating("pwwkew"));
console.log(substringNonrepeating(""));
console.log(substringNonrepeating("lolk"));
console.log(substringNonrepeating([7,6,5,7,3,7]));

module.exports = {substringNonrepeating};
