/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = num => {  
  //initialize empty array
  let resultArr = [];
  //iterate to num, adding each num to array
  for(let i = 1; i <= num; i++) {
      //conditional statement to add 'fizzbuzz' if num is divisible by 3 AND 5
      if(i % 3 === 0 || i % 5 === 0) {
        if(i % 3 === 0 && i % 5 === 0) resultArr.push('fizzbuzz');
        //conditional to add fizz if number is divisible by 3 but not 5
        //conditional to add buzz if number is divisible by 5 but not 3
        if(i % 3 === 0 && i % 5 !== 0) resultArr.push('fizz');
        if(i % 5 === 0 && i % 3 !== 0) resultArr.push('buzz');
      }
      else resultArr.push(i);
  }
  //return new array
  return resultArr
};

console.log(fizzbuzz(16))
/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
"buzz" in place of numbers divisble by 5 but not by 3 or 7,
"bazz" in place of numbers divisble by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.

fizzbuzzbazz(22);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22]

*/

const fizzbuzzbazz = num => {
  
};

module.exports = {fizzbuzz, fizzbuzzbazz};
