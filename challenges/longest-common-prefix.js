/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

//[cat, car] --> "ca"
//[cat, car, dog] --> ""

 //  compare currentString with nextString, char by char. 
 //  if they match, go to next char. 
 //  if full match and reach the end of either string, reset result and go to next string
 //  if no matches at index = 0, set "".
 //  if next string is the final string and we reach the end of the characters of next string, return next string
const longestCommonPrefix = (strs) => {
  if(strs.length === 1) return strs[0];

  let result = "";
  let currentString;
  let nextString;

  while(strs.length > 1) {
    currentString = strs[0];
    nextString = strs[1];

    for(let i = 0; i < currentString.length; i++) {
      if(currentString[i] === nextString[i]) result += currentString[i];
      if((currentString[i] !== nextString[i]) && i === 0) return "";
      if((i === currentString.length - 1 || i === nextString.length - 1) && currentString[i] === nextString[i]) result = "";
      if((nextString === strs[strs.length - 1]) && (i === currentString.length - 1 || i === nextString.length - 1) && currentString[i] === nextString[i]) result = nextString;
    } 
    strs = strs.slice(1, strs.length);
  }
  return result;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["cat", "car", "dog"]))
console.log(longestCommonPrefix(["same", "same", "same"]))

module.exports = { longestCommonPrefix };
