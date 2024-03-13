// # A phrase is a palindrome if, after converting all uppercase letters 
// # into lowercase letters and removing all non-alphanumeric characters, 
// # it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// # Given a string s, return true if it is a palindrome, or false otherwise.


// # Example 1:
// # Input: s = "A man, a plan, a canal: Panama"
// # Output: true
// # Explanation: "amanaplanacanalpanama" is a palindrome.

// # Example 2:
// # Input: s = "race a car"
// # Output: false
// # Explanation: "raceacar" is not a palindrome.

// # Example 3:
// # Input: s = " "
// # Output: true
// # Explanation: s is an empty string "" after removing non-alphanumeric characters.
// # Since an empty string reads the same forward and backward, it is a palindrome.

const isPalindrome = (str) => {
  if(str.length <= 1) return true;
  //convert all letters into lowercase letters 
    // alphanumeric characters
  let strParsed = false;
  let index = 0;
  let newStr = '';

  while(!strParsed){
    let char = str[index];
    console.log(isAlphanumeric(char));
    if(isAlphanumeric(char)) {
      newStr += char.toLowerCase()
    };
    console.log(char);
    index++;
    if(index === str.length) strParsed = true;
  };
  console.log('newStr: ', newStr);
  //compare left side to right side
  console.log(newStr.length / 2);
  for(let i = 0; i < newStr.length/2; i++) {
    const j = newStr.length - (1 + i);
    console.log(i);
    console.log(j);
    if(newStr[i] !== newStr[j]) return false;
  }
  
  return true;
}

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(isPalindrome('cat'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('rasda!@'));