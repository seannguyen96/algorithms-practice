/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/
//[4, 9, 10, 12] -> [12, 10, 9, 4]
//[4, 9, 10, 12, 20] -> [20, 12, 10, 9, 4]
const reverseArray = array => {
  for(let i = 0; i < array.length / 2; i++) {
    earlyNum = array[i];
    laterNum = array[array.length - 1 - i];
    array[i] = laterNum;
    array[array.length - 1 - i] = earlyNum;
  }
  return array;
};
console.log(reverseArray([4, 9, 10, 12]))
console.log(reverseArray([4, 9, 10, 12, 20]))

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {
  sentence = sentence.split(' ');
//   console.log('new sentence array', sentence)
  //iterate through sentence array and reversing its indexes
  for(let i = 0; i < sentence.length / 2; i++){
    earlyWord= sentence[i];
    laterWord = sentence[sentence.length - 1 - i];
    sentence[i] = laterWord;
    sentence[sentence.length - 1 - i] = earlyWord;
  }//sentence = [alot, dogs, likes, bob]
  //join array with a space separator
  sentence = sentence.join(' ');
  return sentence
};

console.log(reverseSentence("bob likes dogs alot" ));
module.exports = {reverseArray, reverseSentence};
