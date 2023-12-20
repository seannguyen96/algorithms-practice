/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
  wordCount = 0;
  if(!array.length > 0) return undefined;
  array = array.flat(Infinity);

  array.forEach((el) => {if(el===keyword) wordCount++;})
  return wordCount;
};

console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi')) 
console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x')) 
console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol'))
/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
  let cache = {};
  if(!array.length) return undefined;
  array = array.flat(Infinity);
  array.forEach((el) => {
    if(!cache[el]) cache[el] = 1;
    else cache[el] = cache[el] + 1;
  })
//   console.log(cache)
  const newArr = Object.entries(cache);
//   console.log(newArr)
  const result = Object.values(cache).sort((a, b) => b-a)
  const maxCount = result[0];
  let resultArr = [];
  newArr.forEach((el)=> {
    if(el[1] >= maxCount) resultArr.push(el[0]);
  })
  resultArr.sort();
  return resultArr;
};
console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars'])) 
console.log(keywordMode([['ace', 'cool'], ['hi'], 'cool']))


module.exports = {keywordCount, keywordMode};
