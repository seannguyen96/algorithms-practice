/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const needleInHaystack = (string, substring) => {
  let result = false;
  // let newString = string.replaceAll(' ', '');
  let newString = string;
  if(newString.length < substring.length) return false;
  //  while newString.length > substring.length,
  //  iterate through newString to search for subString[0]
  //  if subString[0] = currentStr, compare rest of newStr
  const compare = (x, y) => {
    if (x === y) return true;
    return false;
  }
  while (newString.length >= substring.length) {
    if (newString[0] === substring[0]) { //  first strings match, so we compare the newString index from 0 to subString.length
      const currentStr = newString.slice(0, substring.length);
      if(compare (currentStr, substring)) return true;
      else newString = newString.slice(substring.length, newString.length);
    }
    else {
      newString = newString.slice(1, newString.length)
    }
  }
  return result;
};

console.log(needleInHaystack("se ed ed", "d"));
console.log(needleInHaystack("xz`tzcatbfbbq", "cat"));
console.log(needleInHaystack("finding a needle in a haystack", "lein"));
console.log(needleInHaystack('y e l l o w', 'l_w'));

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {

};

module.exports = { needleInHaystack, needleInHaystackWithWildcards };