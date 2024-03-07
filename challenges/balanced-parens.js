/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
  //base case
  const stack = [];
  let index = 0;
  const brackets = {
      '{' : '}',
      '(' : ')',
      '[' : ']'
  }
  const closingBrackets = new Set(Object.values(brackets));
  //iterate through each input index checking bracket type
  //add open brackets to stack
  //pop from stack if close bracket matches open, otherwise return false
    while (index < input.length) {
      let bracket = input[index];

      if(brackets[bracket]) {
        stack.push(bracket);
      } 
      if (closingBrackets.has(bracket)) {
        let openBracket = stack.pop();
        let closeBracket = bracket;

        if (brackets[openBracket] != closeBracket) return false;
      }
      index++;
    }
    if(stack.length > 0 ) return false;
    return true;
};


console.log(balancedParens('('));
console.log(balancedParens('()[]{}{)'));
console.log(balancedParens('{ yo: thisIsAwesome() }'));
console.log(balancedParens('const coolFunc = () => { anotherCoolFunc(); }'));
console.log(balancedParens('const yungHash = { a_key: { another_key: a_sicc_value }'));

module.exports = { balancedParens} ;
